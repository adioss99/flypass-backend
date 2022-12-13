/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
const randomstring = require('randomstring')
const jwt = require('jsonwebtoken');
const {
  Passenger,
  Booking,
  BookingStatus,
  PassengerContact,
  PassengerBooking,
  Flight,
} = require('../../models');

const decodeToken = (token) => jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

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

const countTotalPrice = async (flight1, flight2, qty) => {
  const Flight1 = await Flight.findByPk(flight1);
  const Flight2 = flight2 !== undefined ? await Flight.findByPk(flight2) : 0;
  const result = Flight1.price * qty + (Flight2 !== 0 ? Flight2.price : Flight2 * qty);
  return result;
};

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
    const passengerData = req.body.passenger;
    const passengerContact = await PassengerContact.create({
      title: contactTitle,
      firstName: contactFirstName,
      lastName: contactLastName,
      phone: contactPhone,
      email: contactEmail,
    })
    const passenger = await Passenger.bulkCreate(passengerData);
    const passengerQty = passenger.length;
    const totalPrice = await countTotalPrice(
      flight1Id,
      flight2Id,
      passengerQty,
    );
    const booking = await Booking.create({
      bookingCode: randomstring.generate({ length: 10, charset: 'alphabetic' }),
      flight1Id,
      flight2Id,
      roundtrip: flight2Id != null,
      userId: user != null ? user.id : user,
      passengerContactId: passengerContact.id,
      bookingStatusId: 1,
      passengerQty,
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
      booking, passengerContact, passenger, passengerBooking,
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
    if (user != null) {
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
        where: {
          userId: user.id,
        },
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

module.exports = {
  handleListBookings,
  handleBookFlight,
  handleGetUserBooking,
  handleSearchBookingByCode,
  handleDeleteBooking,
};
