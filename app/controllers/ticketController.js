const {
  Ticket, Flight, Airport, Airline, FlighType, TicketClass,
} = require('../../models');

const handleListTickets = async (req, res) => {
  try {
    const flightAttr = ['id', 'departureDate', 'arrivalDate', 'duration'];
    const airportAttr = ['id', 'iata', 'name', 'city', 'country'];
    const tickets = await Ticket.findAll({
      include: [
        {
          model: TicketClass,
        },
        {
          model: Flight,
          attributes: flightAttr,
          include: [
            {
              model: Airport,
              as: 'departureAirport',
              attributes: airportAttr,
            },
            {
              model: Airport,
              as: 'arrivalAirport',
              attributes: airportAttr,
            },
          ],
        },
      ],
    })
    res.status(200).json({ tickets })
  } catch (err) {
    res.status(404).json(err);
  }
}
const handleGetTicket = async (req, res) => {
  
}
const handleCreateTicket = async (req, res) => {
  try {
    const {
      airlineId,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      departureDate,
      arrivalDate,
      price,
      ticketClassId,
    } = req.body
    const flight = await Flight.create({
      airlineId,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      departureDate,
      arrivalDate,
    })
    const ticket = await Ticket.create({
      flightId: flight.id,
      price,
      ticketClassId,
    })
    res.status(200).json({ ticket })
  } catch (err) {
    res.status(404).json(err);
  }
}
// const handleUpdateTicket
// const handleDeleteTicket
module.exports = {
  handleListTickets,
  handleCreateTicket,
}
