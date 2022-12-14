const {
  Wishlist, Flight,
} = require('../../models');
const { flightInc } = require('./flightController');

const flightAttr = ['id', 'flightCode', 'departureDate', 'departureTime', 'arrivalDate', 'arrivalTime', 'duration', 'price', 'baggage', 'isAvailable'];

const addWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const flightId = req.params.idflight;
    const check = await Wishlist.findOne({ where: { flightId, userId } });
    if (check) {
      res.status(401).json({ message: 'already in wishlist' });
      return;
    }
    const whistlist = await Wishlist.create({ flightId, userId });
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

const getWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const whist = await Wishlist.findAll({
      include: [
        {
          model: Flight,
          attributes: flightAttr,
          include: flightInc,
        },
      ],
      where: { userId },
    });
    const data = [];
    whist.forEach((element) => {
      data.push(element.Flight);
    });
    const wishlist = data.length === 0 ? null : data;
    res.status(200).json({ wishlist });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const deleteWishlist = async (req, res) => {
  try {
    const flightId = req.params.idflight;
    const userId = req.user.id;
    const del = await Wishlist.destroy({ where: { flightId, userId } });
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
  addWishlist,
  getWishlist,
  deleteWishlist,
};
