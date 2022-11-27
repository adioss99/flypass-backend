const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer')

const { flightController, ticketController } = require('./controllers');

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
app.get('/v1/flights', flightController.handleListFlights);
app.get('/v1/flight', flightController.handleGetFlight);
app.post('/v1/flight', flightController.handleCreateFlight);

app.get('/v1/tickets', ticketController.handleListTickets)
app.post('/v1/ticket', ticketController.handleCreateTicket)
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
