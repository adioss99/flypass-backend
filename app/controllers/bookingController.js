/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
const jwt = require('jsonwebtoken')
const {
  Passenger, Booking, PassengerBooking, Flight,
} = require('../../models');

const handleListBookings = async (req, res) => {
  try {
    const booking = await Booking.findAll({
      include: [
        {
          model: Flight,
          as: 'flight1',
          include: { all: true },
        },
        {
          model: Flight,
          as: 'flight2',
          include: { all: true },
        },
        {
          model: Passenger,
          attributes: ['firstName', 'lastName', 'identityType', 'identityNumber', 'age'],
        },
      ],
    })
    res.status(200).json(booking)
  } catch (error) {
    res.status(404).json(error)
  }
}

const handleBookFlight = async (req, res) => {
  try {
    const user = userToken(req)
    const { flight1Id, flight2Id } = req.body
    const passengerData = req.body.passenger
    const passenger = await Passenger.bulkCreate(passengerData)
    const passengerQty = passenger.length
    const totalPrice = await countTotalPrice(flight1Id, flight2Id, passengerQty)
    const booking = await Booking.create(
      {
        bookingCode: createBookingCode(),
        flight1Id,
        flight2Id,
        roundtrip: flight2Id === null,
        userId: user != null ? user.id : user,
        bookingStatusId: 1,
        passengerQty,
        totalPrice,
      },
    )
    const passengerBookingData = passenger.map((e) => (
      { passengerId: e.id, bookingId: booking.id }
    ))
    const passengerBooking = await PassengerBooking.bulkCreate(passengerBookingData)
    res.status(200).json({ booking, passenger, passengerBooking })
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

const createBookingCode = () => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * 52));
  }
  return result;
}

const userToken = (req) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1]
    const payload = decodeToken(token)
    return payload
  } catch (error) {
    const payload = null
    return payload
  }
}

const decodeToken = (token) => jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

const countTotalPrice = async (flight1, flight2, qty) => {
  const Flight1 = await Flight.findByPk(flight1)
  const Flight2 = flight2 !== undefined ? await Flight.findByPk(flight2) : 0
  const result = (Flight1.price * qty) + (Flight2 !== 0 ? Flight2.price : Flight2 * qty)
  return result
}

module.exports = {
  handleListBookings,
  handleBookFlight,
}
