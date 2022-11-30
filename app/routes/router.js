const express = require('express');

const {
  getStarted,
  userController,
  flightController,
  authController,
  airlineController,
  airplaneController,
  airportController,
} = require('../controllers');

const { authorize, isAdmin } = require('../middleware/authorization');
const emailExist = require('../middleware/emailCheck');
const uploadOnMemory = require('../middleware/uploadOnMemory');

const router = express.Router();

router.get('/', getStarted);

// profile
router.get('/v1/user', authorize, userController.getProfile);
router.put('/v1/user', authorize, uploadOnMemory.single('image'), userController.updateProfiles);

// flight
router.get('/v1/flights/search?:depDate?:depAirport?:arrAirport?', flightController.handleSearchFlight);
router.get('/v1/flights', flightController.handleListFlights);
router.get('/v1/flights/:id', flightController.handleGetFlight);
router.post('/v1/flights', flightController.handleCreateFlight);
router.put('/v1/flights/:id', flightController.handleUpdateFlight);
router.delete('/v1/flights/:id', flightController.handleDeleteFlight);

// auth
router.post('/v1/login', authController.login);
router.post('/v1/register', emailExist, authController.register);
router.post('/v1/register/admin', authorize, isAdmin, emailExist, authController.registerAdmin);
router.get('/v1/whoami', authorize, authController.whoAmI);
router.get('/v1/refresh', authController.refreshToken);
router.get('/v1/logout', authController.logout);

// airline
router.get('/v1/airlines', airlineController.getAirlines);
router.get('/v1/airlines/:id', airlineController.getAirline);
router.post('/v1/airlines', authorize, isAdmin, uploadOnMemory.single('image'), airlineController.createAirline);
router.delete('/v1/airlines/:id', authorize, isAdmin, airlineController.deleteAirline);
router.put('/v1/airlines/:id', authorize, isAdmin, uploadOnMemory.single('image'), airlineController.updateAirline);

// airplane
router.get('/v1/airplanes', airplaneController.getAirplanes);
router.get('/v1/airplanes/:id', airplaneController.getAirplane);
router.post('/v1/airplanes', airplaneController.createAirplane);
router.put('/v1/airplanes/:id', airplaneController.updateAirplane);
router.delete('/v1/airplanes/:id', airplaneController.deleteAirplane);

// airport
<<<<<<< HEAD
router.get('v1/airport/', airportController.getAirport)
=======
router.get('/v1/airport', airportController.getAirport);

>>>>>>> cdf4e809a12ba3ace2be8a8117d8f55bf2a21f21
router.use(authController.onLost);
router.use(authController.onError);

module.exports = router;
