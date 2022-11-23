const express = require('express');
const controllers = require('../controllers');

const Router = express.Router();

Router.get(
  '/api/v1/whoami',
  controllers.api.v1.authController.authorize,
  controllers.api.v1.authController.whoAmI,
);
Router.post('/api/v1/login', controllers.api.v1.authController.login);
Router.post('/api/v1/register', controllers.api.v1.authController.register);

Router.use(controllers.api.main.onLost);
Router.use(controllers.api.main.onError);

module.exports = Router;
