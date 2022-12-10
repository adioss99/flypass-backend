const express = require('express');
const multer = require('multer');

const form = multer();

const {
  getStarted,
  userController,
  flightController,
  authController,
  airlineController,
  airplaneController,
  airportController,
  bookingController,
  whistlistController,
  transactionmethodController,
  transaction,
} = require('../controllers');

const { authorize, isAdmin } = require('../middleware/authorization');
const emailExist = require('../middleware/emailCheck');
const uploadOnMemory = require('../middleware/uploadOnMemory');

const router = express.Router();

router.get('/', getStarted);

// image
router.put('/v1/user', authorize, uploadOnMemory.single('image'), userController.updateProfiles);
router.put('/v1/airlines/:id', authorize, isAdmin, uploadOnMemory.single('image'), airlineController.updateAirline);
router.post('/v1/airlines', authorize, isAdmin, uploadOnMemory.single('image'), airlineController.createAirline);
router.post('/v1/Payment/insert', uploadOnMemory.single('image'), transactionmethodController.savePayment);

// >>>>>>>>>>>
router.use(form.array());

// user
router.get('/v1/user', authorize, userController.getProfile);
router.get('/v1/getalluser', authorize, isAdmin, userController.getAlluser);

// flight
router.get('/v1/flights/search?:depDate?:depAirport?:arrAirport?', flightController.handleSearchFlight);
router.get('/v1/flights', flightController.handleListFlights);
router.get('/v1/flights/:id', flightController.handleGetFlight);
router.post('/v1/flights', authorize, isAdmin, flightController.handleCreateFlight);
router.put('/v1/flights/:id', authorize, isAdmin, flightController.handleUpdateFlight);
router.delete('/v1/flights/:id', authorize, isAdmin, flightController.handleDeleteFlight);

// auth
router.get('/v1/gsiauth', authController.handleGoogleAuthUrl);
router.get('/v1/gsiauthcb', authController.handleGoogleAuthCb);
router.post('/v1/login', authController.login);
router.post('/v1/register', emailExist, authController.register);
router.post('/v1/register/admin', authorize, isAdmin, emailExist, authController.registerAdmin);
router.get('/v1/whoami', authorize, authController.whoAmI);
router.get('/v1/refresh', authController.refreshToken);
router.get('/v1/logout', authController.logout);

// airline
router.get('/v1/airlines', airlineController.getAirlines);
router.get('/v1/airlines/:id', airlineController.getAirline);
router.delete('/v1/airlines/:id', authorize, isAdmin, airlineController.deleteAirline);

// airplane
router.get('/v1/airplanes', airplaneController.getAirplanes);
router.get('/v1/airplanes/:id', airplaneController.getAirplane);
router.post('/v1/airplanes', authorize, isAdmin, airplaneController.createAirplane);
router.put('/v1/airplanes/:id', authorize, isAdmin, airplaneController.updateAirplane);
router.delete('/v1/airplanes/:id', authorize, isAdmin, airplaneController.deleteAirplane);

// airport
router.get('/v1/airport', airportController.getAirport);

// booking
router.post('/v1/flights/books', bookingController.handleBookFlight)
router.get('/v1/bookings/all', authorize, isAdmin, bookingController.handleListBookings);
router.get('/v1/bookings', bookingController.handleGetUserBooking)
router.get('/v1/bookings/search?:bookingcode?', bookingController.handleSearchBookingByCode);
router.delete('/v1/bookings')

// whistlist
router.get('/v1/whistlist', authorize, whistlistController.getWhistlist);
router.post('/v1/whistlist/:idflight', authorize, whistlistController.addWhistlist);
router.delete('/v1/whistlist/:idflight', authorize, whistlistController.deleteWhistlist);

// transactionmethod
router.get('/v1/payment/findall', authorize, isAdmin, transactionmethodController.getallPayment);
router.delete('/v1/payment/:id', authorize, isAdmin, transactionmethodController.deletePayment);

// transcation
router.get('/v1/pay/findall', transaction.getalltranscation);

router.use(authController.onLost);
router.use(authController.onError);

module.exports = router;
