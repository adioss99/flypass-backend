const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer')

const { flightController } = require('./controllers');


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
app.get('/v1/flights/search?:depDate?:depAirport?:arrAirport?', flightController.handleSearchFlight)
app.get('/v1/flights', flightController.handleListFlights);
app.get('/v1/flights/:id', flightController.handleGetFlight);
app.post('/v1/flights', flightController.handleCreateFlight);
app.put('/v1/flights/:id', flightController.handleUpdateFlight);

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
