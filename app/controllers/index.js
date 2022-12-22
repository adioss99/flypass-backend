const flightController = require('./flightController');
const authController = require('./authController');
const userController = require('./userController');
const airlineController = require('./airlineController');
const airplaneController = require('./airplaneController');
const airportController = require('./airportController');
const bookingController = require('./bookingController');
const wishlistController = require('./wishlistController');
const notificationController = require('./notificationController');
const transaction = require('./transactionController');
const eWalletController = require('./walletController');

const getStarted = (req, res) => {
  res.status(200).json({
    message: 'flypass API ready',
    status: 'take off',
  });
};

module.exports = {
  getStarted,
  flightController,
  authController,
  userController,
  airlineController,
  airplaneController,
  airportController,
  bookingController,
  wishlistController,
  transaction,
  notificationController,
  eWalletController,
};
