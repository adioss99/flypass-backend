const FlightController = require('./flightController');
const authController = require('./authController');
const userController = require('./userController');
const airlineController = require('./airlineController');

const getStarted = (req, res) => {
  res.status(200).json({
    message: 'flypass API ready',
    status: 'take off',
  });
}

module.exports = {
  getStarted,
  FlightController,
  authController,
  userController,
  airlineController,
};
