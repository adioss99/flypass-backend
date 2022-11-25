/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validationResult = require('express-validator');
const { User } = require('../../models');

const SALT = 10;

function encryptPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT, (err, encryptedPassword) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(encryptedPassword);
    });
  });
}

function checkPassword(encryptedPassword, password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(isPasswordCorrect);
    });
  });
}

function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SIGNATURE_KEY || 'Rahasia');
}

module.exports = {
  async register(req, res) {
    const { email } = req.body;
    const confrimPassowrd = req.body;
    const confirmPassword = await validationResult(req)
    const encryptedPassword = await encryptPassword(req.body.password);
    const user = await User.create({ email, encryptedPassword, confirmPassword});
    res.status(201).json({
      id: user.id,
      email: user.email,
      confirmPassword: user.confrimPassowrd,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
    const errors = validationResult(req);
    if (!errors.isEmpty(confrimPassowrd)) {
      return res.status(400).json({ errors: errors.array() });
    }
  },

  async login(req, res) {
    const email = req.body.email.toLowerCase(); // Biar case insensitive
    const { password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ message: 'Email tidak ditemukan' });
      return;
    }

    const isPasswordCorrect = await checkPassword(
      user.encryptedPassword,
      password,
    );

    if (!isPasswordCorrect) {
      res.status(401).json({ message: 'Password salah!' });
      return;
    }
    const token = createToken({
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });

    res.status(201).json({
      id: user.id,
      email: user.email,
      token,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  },

  async whoAmI(req, res) {
    res.status(200).json(req.user);
  },

  async logout(req, res) {
    req.logout();
    res.status(200).json(req.user);
  },

  async authorize(req, res, next) {
    try {
      const bearerToken = req.headers.authorization;
      const token = bearerToken.split('Bearer ')[1];
      const tokenPayload = jwt.verify(
        token,
        process.env.JWT_SIGNATURE_KEY || 'Rahasia',
      );

      req.user = await User.findByPk(tokenPayload.id);
      next();
    } catch (err) {
      console.error(err);
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
  },
  onLost(_req, res) {
    res.status(404).json({
      status: 'FAIL',
      message: 'Route not found!',
    });
  },
  onError(err, _req, res, _next) {
    res.status(500).json({
      status: 'ERROR',
      error: {
        name: err.name,
        message: err.message,
      },
    });
  },
};
