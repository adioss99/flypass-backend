const { Airline, Flight, Airplane } = require('../../models');

const airlineCheck = async (req, res, next) => {
  const data = await Airline.findByPk(req.params.id)
  if (!data) {
    res.status(204).json({ message: 'airline not found' })
    return;
  }
  next()
};

const flightCheck = async (req, res, next) => {
  const data = await Flight.findByPk(req.params.id);
  if (!data) {
    res.status(204).json({ message: 'flight not found' })
    return;
  }
  next()
};

const airplaneCheck = async (req, res, next) => {
  const data = await Airplane.findByPk(req.params.id);
  if (!data) {
    res.status(204).json({ message: 'airplane not found' });
    return;
  }
  next();
};

module.exports = {
  airlineCheck,
  flightCheck,
  airplaneCheck,
};
