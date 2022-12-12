/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
const randomstring = require('randomstring');
const jwt = require('jsonwebtoken');
const {
  Passenger,
  Booking,
  BookingStatus,
  PassengerContact,
  PassengerBooking,
  Flight,
} = require('../../models');

const handleListBookings = async (req, res) => {
  try {
    const booking = await Booking.findAll({
      include: [
        {
          model: Flight,
          as: 'flight1',
        },
        {
          model: Flight,
          as: 'flight2',
        },
        {
          model: PassengerContact,
        },
        {
          model: BookingStatus,
        },
        {
          model: Passenger,
        },
      ],
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
    } = req.body;
    const flightPrice = await Promise.all(
      [flight1Id, flight2Id].filter((e) => e !== undefined).map(getPrice),
    );
    const passengerData = req.body.passenger;
    const passenger = await Passenger.bulkCreate(passengerData);
    const passengerBaggages = passenger
      .map((passengers) => passengers.baggage)
      .filter((baggages) => baggages !== null)
      .map((baggage) => baggage.map(baggageMultiplier));

    const passengerContact = await PassengerContact.create({
      title: contactTitle,
      firstName: contactFirstName,
      lastName: contactLastName,
      phone: contactPhone,
      email: contactEmail,
    });

    const passengerQty = passenger.length;
    let totalPassengerBaggagePrice = 0;
    for (let i = 0; i < passengerQty; i++) {
      if (
        typeof passengerBaggages[i][1] === 'undefined'
        && typeof flightPrice[1] === 'undefined'
      ) {
        totalPassengerBaggagePrice
          += passengerBaggages[i] * (flightPrice[0] / 100);
      } else {
        for (let j = 0; j < passengerQty; j++) {
          totalPassengerBaggagePrice
            += passengerBaggages[i][j] * (flightPrice[i] / 100);
        }
      }
    }

    const totalPrice = flightPrice.map((e) => e * passengerQty).reduce((a, b) => a + b)
      + totalPassengerBaggagePrice;

    const booking = await Booking.create({
      bookingCode: randomstring.generate({ length: 10, charset: 'alphabetic' }),
      flight1Id,
      flight2Id,
      roundtrip: flight2Id != null,
      userId: user !== null ? user.id : user,
      passengerContactId: passengerContact.id,
      bookingStatusId: 1,
      passengerQty,
      totalPassengerBaggagePrice:
        totalPassengerBaggagePrice !== null ? totalPassengerBaggagePrice : 0,
      totalPrice,
    });
    const passengerBookingData = passenger.map((e) => ({
      passengerId: e.id,
      bookingId: booking.id,
    }));
    const passengerBooking = await PassengerBooking.bulkCreate(
      passengerBookingData,
    );
    res.status(200).json({
      booking,
      passengerContact,
      passenger,
      passengerBooking,
    });
  } catch (err) {
    res.status(422).json({
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
      include: [
        {
          model: Flight,
          as: 'flight1',
        },
        {
          model: Flight,
          as: 'flight2',
        },
        {
          model: PassengerContact,
        },
        {
          model: BookingStatus,
        },
        {
          model: Passenger,
        },
      ],
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
        include: [
          {
            model: Flight,
            as: 'flight1',
          },
          {
            model: Flight,
            as: 'flight2',
          },
          {
            model: PassengerContact,
          },
          {
            model: BookingStatus,
          },
          {
            model: Passenger,
          },
        ],
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
  const booking = await Booking.destroy({ where: { id: req.params.id } });
  res.status(204).end();
};

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
  let result = multiplier[1];
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
};
