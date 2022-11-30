/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const validationResult = require('express-validator');
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
  const access = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '6h' });
  const refresh = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '6h' });
  return [access, refresh]
}

const register = async (req, res, roles) => {
  const email = req.body.email.toLowerCase();
  const { name, password, confirmationPassword } = req.body;
  const role = roles !== 1 ? 2 : 1;
  if (password !== confirmationPassword) {
    res.status(401).json({ message: 'password doesn`t match' })
    return;
  }
  const encryptedPassword = await encryptPassword(password);

  await User.create({
    name,
    email,
    encryptedPassword,
    roleId: role,
  });

  res.status(201).json({
    message: 'register success',
  });
  // const errors = validationResult(req);
  // if (!errors.isEmpty(confirmationPassword)) {
  //   res.status(400).json({ errors: errors.array() });
  // }
};

const registerAdmin = async (req, res) => {
  register(req, res, 1)
};

const login = async (req, res) => {
  const email = req.body.email.toLowerCase(); // Biar case insensitive
  const { password } = req.body;

  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    res.status(404).json({ message: 'Email not found' });
    return;
  }

  const isPasswordCorrect = await checkPassword(
    user.encryptedPassword,
    password,
  );

  if (!isPasswordCorrect) {
    res.status(401).json({ message: 'Wrong password!' });
    return;
  }

  const token = createToken({
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  });
  const accesstToken = token[0];
  const refreshToken = token[1];
  await User.update(
    { refreshToken },
    {
      where: {
        id: user.id,
      },
    },
  );
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.status(201).json({
    message: 'login success',
    user: {
      id: user.id,
      email: user.email,
      accesstToken,
    },
  });
};

const whoAmI = async (req, res) => {
  res.status(200).json(req.user);
};

const logout = async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken === undefined || req.body.refreshToken === null ? req.cookies.refreshToken : req.body.refreshToken;
    if (!refreshToken) {
      res.status(204).send('null')
      return;
    }
    const user = await User.findAll({
      where: {
        refreshToken,
      },
    });
    if (!user[0]) {
      res.status(204).send('notfound')
      return;
    }
    const userId = user[0].id;
    await User.update(
      { refreshToken: null },
      {
        where: {
          id: userId,
        },
      },
    );
    res.clearCookie('refreshToken');
    res.status(200).json('Log out success');
  } catch (error) {
    res.status(400).json({ msg: 'Something went wrong' });
  }
};

const refreshToken = async (req, res) => {
  try {
    const refresh = req.cookies.refreshToken;
    if (!refresh) {
      res.sendStatus(401);
      return;
    }
    const user = await User.findOne({
      where: {
        refreshToken: refresh,
      },
    });
    if (!user[0]) {
      res.sendStatus(403);
      return
    }
    jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.sendStatus(403);
        return;
      }
      const userId = user[0].id;
      const { name } = user[0].name;
      const { email } = user[0].email;
      const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '6h',
      });
      res.json({
        userId,
        name,
        email,
        accessToken,
      });
    });
  } catch (error) {
    res.send(403).json({ message: 'refreshToken error' })
  }
};

module.exports = {
  register,
  registerAdmin,
  login,
  whoAmI,
  logout,
  refreshToken,
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