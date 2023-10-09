/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
const randomstring = require('randomstring');
const jwt = require('jsonwebtoken');
const {
  Passenger,
  Booking,
  PassengerContact,
  PassengerBooking,
  Flight,
  Airline,
  Airplane,
  FlightClass,
  FlightType,
  Airport,
  BookingStatus,
} = require('../../models');
const { createNotification } = require('./notificationController');
const { flightInc, flightAttr } = require('./flightController');

const flight2Inc = [
  {
    model: Airline,
  },
  {
    model: Airplane,
  },
  {
    model: FlightClass,
  },
  {
    model: FlightType,
  },
  {
    model: Airport,
    as: 'departureAirport',
  },
  {
    model: Airport,
    as: 'arrivalAirport',
  },
];

const countTotalPrice = async (flight1, flight2, qty) => {
  const Flight1 = await Flight.findByPk(flight1);
  const Flight2 = flight2 !== undefined ? await Flight.findByPk(flight2) : 0;
  const result = Flight1.price * qty + (Flight2 !== 0 ? Flight2.price : Flight2 * qty);
  return result;
};

const bookingInc = [
  {
    model: Flight,
    as: 'flight1',
    attributes: flightAttr,
    include: flightInc,
  },
  {
    model: Flight,
    as: 'flight2',
    attributes: flightAttr,
    include: flight2Inc,
  },
  {
    model: Passenger,
    through: {
      attributes: [],
    },
  },
  {
    model: PassengerContact,
  },
  {
    model: BookingStatus,
  },
]

const handleListBookings = async (req, res) => {
  try {
    const booking = await Booking.findAll({
      include: bookingInc,
    });
    res.status(200).json({ booking });
  } catch (err) {
    res.status(404).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const handleBookFlight = async (req, res) => {
  try {
    const user = userToken(req);
    const {
      contactTitle,
      contactFirstName,
      contactLastName,
      contactPhone,
      contactEmail,
      flight1Id,
      flight2Id,
      passenger,
    } = req.body;

    // Validate input data
    if (!contactTitle || !contactFirstName || !contactLastName || !contactEmail || !flight1Id) {
      return res.status(400).json({ error: 'Missing required data' });
    }

    // Create passenger contact
    const passengerContact = await PassengerContact.create({
      title: contactTitle,
      firstName: contactFirstName,
      lastName: contactLastName,
      phone: contactPhone,
      email: contactEmail,
    });

    // Create passengers and calculate baggage prices
    const passengerData = passenger || [];
    const passengerPromises = passengerData.map(async (data) => {
      const passenger = await Passenger.create(data);
      return passenger;
    });
    const passengers = await Promise.all(passengerPromises);
    const passengerBaggages = passengers
      .map((passenger) => passenger.baggage || 0)
      .reduce((acc, baggage) => acc + baggage, 0);

    // Get flight prices
    const flightIds = [flight1Id, flight2Id].filter((id) => id !== undefined);
    const flightPricePromises = flightIds.map(getPrice);
    const flightPrices = await Promise.all(flightPricePromises);

    // Calculate total passenger baggage price
    const passengerQty = passengers.length;
    const totalPassengerBaggagePrice = countBaggagePrice(
      passengerBaggages,
      flightPrices,
      passengerQty
    );

    // Calculate total price
    const totalPrice = flightPrices.reduce((acc, price) => acc + price, 0) +
      (totalPassengerBaggagePrice || 0);

    // Create booking
    const userId = user ? user.id : null;
    const booking = await Booking.create({
      bookingCode: randomstring.generate({ length: 10, charset: 'alphabetic' }),
      flight1Id,
      flight2Id,
      roundtrip: !!flight2Id,
      userId,
      passengerContactId: passengerContact.id,
      bookingStatusId: 1,
      passengerQty,
      totalPassengerBaggagePrice: totalPassengerBaggagePrice || 0,
      totalPrice,
    });

    // Create passenger bookings
    const passengerBookingData = passengers.map((passenger) => ({
      passengerId: passenger.id,
      bookingId: booking.id,
    }));
    await PassengerBooking.bulkCreate(passengerBookingData);

    // Create notification if user is authenticated
    if (userId) {
      await createNotification('Waiting for payment', booking.bookingCode, booking.id, false, userId);
    }

    // Construct response
    const response = {
      booking,
      passengerContact,
      passengers,
    };

    // Return booking details
    const bookingDetails = await Booking.findByPk(booking.id, { include: bookingInc });
    req.payload = bookingDetails;
    return res.status(200).json(response);
  } catch (err) {
    console.error('Error:', err);
    return res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const handleSearchBookingByCode = async (req, res) => {
  try {
    const booking = await Booking.findAll({
      where: {
        bookingCode: req.query.bookingcode,
      },
      include: bookingInc,
    });
    res.status(200).json({ booking });
  } catch (err) {
    res.status(404).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const handleGetUserBooking = async (req, res) => {
  try {
    const user = userToken(req);
    if (user !== null) {
      const booking = await Booking.findAll({
        where: {
          userId: user.id,
        },
        include: bookingInc,
      });
      res.status(200).json({ booking });
    } else {
      res.status(404).json({
        error: {
          message: 'you have too be logged in see your booking',
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const handleDeleteBooking = async (req, res) => {
  await Booking.destroy({ where: { id: req.params.id } });
  res.status(204).end();
};

const historyBooking = async (req, res) => {
  try {
    const history = await Booking.findAll({
      where: { userId: req.user.id },
      include: bookingInc,
    })
    res.status(200).json({ history })
  } catch (err) {
    res.status(404).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

const userToken = (req) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    const payload = decodeToken(token);
    return payload;
  } catch (error) {
    const payload = null;
    return payload;
  }
};

const decodeToken = (token) => jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

const baggageMultiplier = (baggage) => {
  if (baggage === null) {
    result = 0;
  }
  const multiplier = [20, 0];
  while (baggage !== multiplier[0] && multiplier[1] < 10) {
    multiplier[0] += 5;
    multiplier[1] += 10;
    while (baggage !== multiplier[0]) {
      multiplier[0] += 5;
      multiplier[1] += 5;
    }
  }
  let result = multiplier[1] / 100;
  return result;
};

const countBaggagePrice = (passengerBaggages, flightPrice, passengerQty) => {
  let result = 0;
  for (let i = 0; i < passengerQty; i++) {
    if (
      typeof passengerBaggages[i][1] === 'undefined'
      && typeof flightPrice[1] === 'undefined'
    ) {
      result += passengerBaggages[i] * flightPrice[0];
    } else {
      for (let j = 0; j < passengerQty; j++) {
        result += passengerBaggages[i][j] * flightPrice[i];
      }
    }
  }
  return result;
};

const getPrice = async (flightId) => {
  const flight = await Flight.findByPk(flightId);
  const result = flight.price;
  return result;
};

module.exports = {
  handleListBookings,
  handleBookFlight,
  handleGetUserBooking,
  handleSearchBookingByCode,
  handleDeleteBooking,
  historyBooking,
};
