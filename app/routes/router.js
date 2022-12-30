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
  wishlistController,
  transaction,
  notificationController,
  eWalletController,
} = require('../controllers');

const { nodeMailer } = require('../middleware')
const { authorize, isAdmin } = require('../middleware/authorization');
const { emailExist, emailNull } = require('../middleware/emailCheck');
const uploadOnMemory = require('../middleware/uploadOnMemory');

const router = express.Router();

router.get('/', getStarted);

// image
router.put('/v1/user', authorize, uploadOnMemory.single('image'), emailNull, userController.updateProfiles);
router.put('/v1/airlines/:id', authorize, isAdmin, uploadOnMemory.single('image'), airlineController.updateAirline);
router.post('/v1/airlines', authorize, isAdmin, uploadOnMemory.single('image'), airlineController.createAirline);
router.post('/v1/pay/create/:bookingId', uploadOnMemory.single('image'), transaction.transactionHandle);
router.put('/v1/pay/updatepay/:id', uploadOnMemory.single('image'), transaction.handlepaymentbookingid);
router.put('/v1/pay/updatepay/:bookingId', uploadOnMemory.single('image'), transaction.handlepayment);

// >>>>>>>>>>>
router.use(form.array());

// user
router.get('/v1/user', authorize, userController.getProfile);
router.get('/v1/getalluser', authorize, isAdmin, userController.getAlluser);
router.put('/v1/changepassword', authorize, userController.changepassword);
router.post('/v1/resetpassword', emailNull, userController.resetPassword, nodeMailer.sendResetPassword);
router.post('/v1/resetpassword/confirm', userController.createNewPassword);

// flight
router.get('/v1/flights/search?:depDate?:depAirport?:arrAirport?', flightController.handleSearchFlight);
router.get('/v1/flights', flightController.handleListFlights);
router.get('/v1/flights/:id', flightController.handleGetFlight);
router.post('/v1/flights', authorize, isAdmin, flightController.handleCreateFlight);
router.put('/v1/flights/:id', authorize, isAdmin, flightController.handleUpdateFlight);
router.delete('/v1/flights/:id', authorize, isAdmin, flightController.handleDeleteFlight);

// auth
router.get('/v1/gsiauth', authController.handleGoogleAuthUrl)
router.get('/v1/gsiauthcb', authController.handleGoogleAuthCb)
router.post('/v1/googleregister', authController.verifyIdToken, authController.handleRegisterGoogle)
router.post('/v1/googlelogin', authController.verifyIdToken, authController.handleLoginGoogle)
router.post('/v1/login', emailNull, authController.login);
router.post('/v1/register', emailNull, emailExist, authController.registerTest(2), nodeMailer.sendEmailVerification);
router.post('/v1/register/admin', emailNull, authorize, isAdmin, emailExist, authController.registerTest(1));
router.post('/v1/verify?:token?', authController.handleEmailVerify);
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

// wishlist
router.get('/v1/wishlist', authorize, wishlistController.getWishlist);
router.post('/v1/wishlist/:idflight', authorize, wishlistController.addWishlist);
router.delete('/v1/wishlist/:idflight', authorize, wishlistController.deleteWishlist);

// transcation
router.get('/v1/pay/:bookingId', authorize, isAdmin, transaction.getBookingTransaction);
router.get('/v1/pay/find/all', authorize, isAdmin, transaction.getalltransaction);
router.put('/v1/pay/confirm/:id', authorize, isAdmin, transaction.handleConfirmPayment);
router.put('/v1/pay/reject/:id', authorize, isAdmin, transaction.handleRejectPayment);

// by id
router.get('/v1/pay/transaction/:id', authorize, isAdmin, transaction.getbyid);
router.put('/v1/pay/confirm/:bookingId', authorize, isAdmin, transaction.handleConfirmPaymentbookingid)
router.put('/v1/pay/reject/:bookingId', authorize, isAdmin, transaction.handleRejectPaymentbookingid)
router.get('/v1/pay/find/detail/:bookingId', transaction.getDetailTransaction);

// notification
router.get('/v1/notification/admin', authorize, isAdmin, notificationController.getNotificationAdmin);
router.get('/v1/notification', authorize, notificationController.getNotificationUser);
router.put('/v1/notification/:id', authorize, notificationController.updateNotification);
router.delete('/v1/notification/:id', authorize, notificationController.deleteNotification);

// wallet
router.post('/v1/wallet', authorize, eWalletController.activateEwallet);
router.get('/v1/wallet', authorize, eWalletController.getUserWalet);
router.post('/v1/wallet/topup', authorize, eWalletController.topUpRequest);
router.post('/v1/wallet/topup/confirm/:walletHistoryId', authorize, eWalletController.topUpConfirmation);
router.post('/v1/wallet/payment/:bookingId', authorize, eWalletController.paymentHandler);
router.get('/v1/wallet/history', authorize, eWalletController.getWalletHistory);
router.get('/v1/wallet/history/:walletHistoryId', authorize, eWalletController.getDetailWalletHistory);
router.post('/v1/wallet/changepin', authorize, eWalletController.changePassword);
router.post('/v1/wallet/resetpin', authorize, eWalletController.resetPINreqeuest, nodeMailer.sendResetPIN);
router.post('/v1/wallet/resetpin/confirm', authorize, eWalletController.consfirmNewPin);

router.use(authController.onLost);
router.use(authController.onError);

module.exports = router;
