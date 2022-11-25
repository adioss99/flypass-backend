const express = require('express');
const bodyParser = require('body-parser');

const { FlightController } = require('./controllers');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ready to fly',
    message: 'go free',
  });
});
app.get('/v1/flights', FlightController.handleListFlights);
app.get('/v1/flight', FlightController.handleGetFlight);
app.post('/v1/flight', FlightController.handleCreateFlight);
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
