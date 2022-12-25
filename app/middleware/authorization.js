const { Op } = require('sequelize')
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const authorize = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split('Bearer ')[1];
    const tokenPayload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = await User.findByPk(tokenPayload.id);
    next();
  } catch (err) {
    res.status(401).json({
      message: 'Unauthorized',
    });
  }
};

const isAdmin = async (req, res, next) => {
  const auth = req.user.roleId;
  if (auth !== 1) {
    res.status(403).json({ message: 'member unauthorized' })
    return;
  }
  next();
};

const isUserVerified = async (req, res, next) => {
  try {
    const isVerified = await User.findOne({
      where: {
        [Op.and]: [
          {
            id: req.user.id,
          },
          {
            isVerified: true,
          },
        ],
      },
    })
    if (!isVerified) {
      res.status(401).json({ message: 'User is not verified.' })
      return
    }
    next()
  } catch (err) {
    res.json({
      err: {
        name: err.name,
        message: err.message,
      },
    })
  }
}

module.exports = { authorize, isAdmin, isUserVerified };
