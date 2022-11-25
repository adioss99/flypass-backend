/* eslint-disable no-unused-vars */
const { Flight } = require("../../models");

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

const handleListFlights = async (req, res) => {
  // nanti bakal, implement pagination
  // const { page = 1, limit = 10 } = req.query;
  try {
    const flights = await Flight.findAndCountAll({
      offset: 0,
      limit: 10,
    });
    res.status(200).json(flights);
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
      duration,
      flightTypeId,
    } = req.body;
    const flight = await Flight.create({
      airlineId,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      departureDate,
      arrivalDate,
      duration,
      flightTypeId,
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

module.exports = {
  handleListFlights,
  handleGetFlight,
  handleCreateFlight,
  handleUpdateFlight,
  handleDeleteFlight,
};
