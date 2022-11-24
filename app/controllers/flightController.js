/* eslint-disable no-unused-vars */
const { Flight } = require('../../models');

const handleListFlights = async (req, res) => {
  const flight = await Flight.findAll();
  console.log(flight);
};
handleListFlights()
const handleGetFlight = async (req, res) => {
  const flight = await Flight.findAll({
    where: {
      id: req.params.id,
    },
  });
};
