const express = require('express');
const controllers = require('../controllers');

const Router = express.Router();

Router.get(
  '/v1/whoami',
  controllers.authController.authorize,
  controllers.authController.whoAmI,
);

Router.get('/v1/logout', controllers.authController.logout);
Router.post('/v1/login', controllers.authController.login);
Router.post('/v1/register', controllers.authController.register);

Router.use(controllers.authController.onLost);
Router.use(controllers.authController.onError);

module.exports = Router;
