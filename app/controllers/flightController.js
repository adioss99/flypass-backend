/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const { Op } = require('sequelize');
const moment = require('moment')
const {
  Flight, Airport, Airline, Airplane,
} = require('../../models');

const handleListFlights = async (req, res) => {
  // nanti bakal, implement pagination
  // const { page = 1, limit = 10 } = req.query;
  try {
    const flightAttr = ['id', 'departureDate', 'arrivalDate', 'duration'];
    const airlineAttr = ['id', 'name', 'image'];
    const airplaneAttr = ['id', 'name'];
    const airportAttr = ['id', 'iata', 'name', 'city', 'country'];
    const flights = await Flight.findAndCountAll({
      attributes: flightAttr,
      include: [
        {
          model: Airline,
        },
        {
          model: Airport,
          as: 'departureAirport',
          attributes: airportAttr,
        },
        {
          model: Airport,
          as: 'arrivalAirport',
          attributes: airportAttr,
        },
      ],
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
    const flight = await Flight.findByPk({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(flight);
  } catch (err) {
    res.status(404).json(err);
  }
};

const handleCreateFlight = async (req, res) => {
  try {
    const {
      airlineId,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      departureDate,
      arrivalDate,
    } = req.body;
    const dur = getDuration(departureDate, arrivalDate)
    const flightType = await isSameCountry(departureAirportId, arrivalAirportId)
    console.log(flightType)
    const flight = await Flight.create({
      airlineId,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      departureDate,
      arrivalDate,
      duration: dur,
      flightTypeId: flightType,
    });
    res.status(200).json(flight);
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
      airlineId,
      airplaneId,
      departureAirportId,
      arrivalAirpotId,
      departureDate,
      arrivalDate,
      duration,
      flightTypeId,
    } = req.body;

    const flight = await Flight.findByPk(req.params.id);
    await flight.update({
      airlineId,
      airplaneId,
      departureAirportId,
      arrivalAirpotId,
      departureDate,
      arrivalDate,
      duration,
      flightTypeId,
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

const handleDeleteFlight = async (req, res) => {
  const flight = Flight.destroy({ where: { id: req.params.id } });
  res.status(204).end();
};

const getDuration = (start, end) => {
  const x = moment(start)
  const y = moment(end)
  const dif = y.diff(x)
  const dur = moment.utc(dif).format('HH:mm:ss')
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
  handleCreateFlight,
  handleUpdateFlight,
  handleDeleteFlight,
};
