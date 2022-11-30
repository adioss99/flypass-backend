/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const { Op } = require('sequelize');
const moment = require('moment')
const {
  Flight, Airport, Airline, Airplane,
} = require('../../models');

const flightAttr = ['id', 'flightCode', 'departureDate','departureTime', 'arrivalDate', 'arrivalTime', 'duration', 'price'];

const handleListFlights = async (req, res) => {
  // nanti bakal, implement pagination
  // const { page = 1, limit = 10 } = req.query;
  try {
    const flights = await Flight.findAll({
      attributes: flightAttr,
      include: { all: true },
      offset: 0,
      limit: 10,
    });
    res.status(200).json({ flights });
  } catch (err) {
    res.status(404).json(err);
  }
};
const handleGetFlight = async (req, res) => {
  try {
    const flight = await Flight.findByPk(req.params.id, {
      attributes: flightAttr,
      include: { all: true },
    });
    res.status(200).json(flight);
  } catch (err) {
    res.status(404).json(err);
  }
};

const handleSearchFlight = async (req, res) => {
  const { depDate, depAirport, arrAirport } = req.query
  try {
    const flight = await Flight.findAll({
      attributes: flightAttr,
      where: {
        departureDate: { [Op.eq]: depDate },
      },
      include: [
        {
          all: true,
        },
        {
          model: Airport,
          as: 'departureAirport',
          where: { iata: depAirport },
        },
        {
          model: Airport,
          as: 'arrivalAirport',
          where: { iata: arrAirport },
        },
      ],
    })
    res.status(200).json({ flight })
  } catch (err) {
    res.status(404).json(err)
  }
}

const handleCreateFlight = async (req, res) => {
  try {
    const {
      flightCode,
      airlineId,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      price,
      flightClassId,
    } = req.body;
    const dur = getDuration(departureTime, arrivalTime)
    const flightType = await isSameCountry(departureAirportId, arrivalAirportId)
    const flight = await Flight.create({
      flightCode,
      airlineId,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      price,
      flightClassId,
      duration: dur,
      flightTypeId: flightType,
    });
    res.status(200).json({
      flight,
      status: 'Ok',
      message: 'Flight created',
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

const handleUpdateFlight = async (req, res) => {
  try {
    const {
      flightCode,
      airlineId,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      price,
      flightClassId,
    } = req.body;
    const dur = getDuration(departureTime, arrivalTime)
    const flightType = await isSameCountry(departureAirportId, arrivalAirportId)
    const flight = await Flight.findByPk(req.params.id);
    await flight.update({
      flightCode,
      airlineId,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      price,
      flightClassId,
      duration: dur,
      flightTypeId: flightType,
    });
    res.status(200).json({
      flight,
      status: 'Ok',
      message: `Flight with Id ${flight.id} updated`,
    })
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const handleDeleteFlight = async (req, res) => {
  const flight = await Flight.destroy({ where: { id: req.params.id } });
  res.status(204).end();
};

const getDuration = (start, end) => {
  const x = moment(start, 'hh:mm:ss')
  const y = moment(end, 'hh:mm:ss')
  const dif = y.diff(x)
  const dur = moment.utc(dif).format('HH:mm:ssss')
  return dur
}

const isSameCountry = async (departure, arrival) => {
  const departureAirportCountry = await Airport.findByPk(departure)
  const arrivalAirportCountry = await Airport.findByPk(arrival)
  return departureAirportCountry.country === arrivalAirportCountry.country ? 1 : 0
}

module.exports = {
  handleListFlights,
  handleGetFlight,
  handleSearchFlight,
  handleCreateFlight,
  handleUpdateFlight,
  handleDeleteFlight,
};
