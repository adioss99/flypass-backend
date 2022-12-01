/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
const { Passenger, Booking, PassengerBooking } = require('../../models');

const handleListBookings = async (req, res) => {
  try {
    const booking = await PassengerBooking.findAll()
    res.status(200).json(booking)
  } catch (error) {
    res.status(404).json(error)
  }
}

const handleCreateBooking = async (req, res) => {
  try {
    const passengerData = req.body.passenger
    const passenger = await Passenger.bulkCreate(passengerData)
    const count = passenger.length
    const booking = await Booking.create({
      bookingCode: makeid(),
      
    })
    res.status(200).json(passenger)
  } catch (error) {
    res.status(422).json(error)
  }
}

function makeid() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * 10));
  }
  return result;
}

module.exports = {
  handleListBookings,
  handleCreateBooking,
}
