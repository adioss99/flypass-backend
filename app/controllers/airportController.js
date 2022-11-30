const { Airport } = require('../../models');

const getData = async (unique) => {
  const data = await Airport.findByPk(unique);
  return data;
};

const getAirport = async (req, res) => {
  try {
    const airport = await Airport.findAll();
    res.status(201).json({ airport });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

module.exports = {
  getData,
  getAirport,
};
