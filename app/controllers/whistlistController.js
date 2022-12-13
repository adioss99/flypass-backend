const {
  Whistlist, Flight,
} = require('../../models');
const { inc } = require('./flightController');

const flightAttr = ['id', 'flightCode', 'departureDate', 'departureTime', 'arrivalDate', 'arrivalTime', 'duration', 'price', 'baggage', 'isAvailable'];

const addWhistlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const flightId = req.params.idflight;
    const check = await Whistlist.findOne({ where: { flightId, userId } });
    if (check) {
      res.status(401).json({ message: 'already in wishlist' });
      return;
    }
    const whistlist = await Whistlist.create({ flightId, userId });
    res.status(201).json({ whistlist });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const getWhistlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const whist = await Whistlist.findAll({
      include: [
        {
          model: Flight,
          attributes: flightAttr,
          include: inc,
        },
      ],
      where: { userId },
    });
    const data = [];
    whist.forEach((element) => {
      data.push(element.Flight);
    });
    const whistlist = data.length === 0 ? null : data;
    res.status(200).json({ whistlist });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const deleteWhistlist = async (req, res) => {
  try {
    const flightId = req.params.idflight;
    const userId = req.user.id;
    const del = await Whistlist.destroy({ where: { flightId, userId } });
    res.status(201).json({ del });
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
  addWhistlist,
  getWhistlist,
  deleteWhistlist,
};
