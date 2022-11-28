/* eslint-disable import/no-unresolved */
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer')

const { FlightController } = require('./controllers');
const { authController } = require('./controllers')

const PORT = 3000;
const app = express();

app.use(multer().none())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ready to fly',
    message: 'go free',
  });
});
app.get(
  '/v1/whoami',
  authController.authorize,
  authController.whoAmI,
);

app.get('/v1/logout', authController.logout);
app.post('/v1/login', authController.login);
app.post('/v1/register', authController.register);

app.use(authController.onLost);
app.use(authController.onError);

app.get('/v1/flights', FlightController.handleListFlights);
app.get('/v1/flight', FlightController.handleGetFlight);
app.post('/v1/flight', FlightController.handleCreateFlight);
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
