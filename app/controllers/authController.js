/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const { User } = require('../../models');

const { people } = google.people('v1');
const SALT = 10;

const {
  GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URL, GOOGLE_CLIENT_ID_ANDROID,
} = process.env;

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URL,
);

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
  const access = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '6h',
  });
  const refresh = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d',
  });
  return [access, refresh];
}

const handleGoogleAuthUrl = async (req, res) => {
  const scopes = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/user.birthday.read',
    'https://www.googleapis.com/auth/user.gender.read',
    'https://www.googleapis.com/auth/user.phonenumbers.read',
    'openid',
  ];
  try {
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      prompt: 'consent',
    });
    res.status(200).json(url)
  } catch (err) {
    res.status(401).json({ error: { name: err.name, message: err.message } });
  }
};

const handleGoogleAuthCb = async (req, res) => {
  const data = req.query;
  const { tokens } = await oauth2Client.getToken(data.code);
  oauth2Client.credentials = tokens;
  res.end('Success')
}

const verifyIdToken = async (req, res, next) => {
  const { IdToken } = req.body
  try {
    const ticket = await oauth2Client.verifyIdToken({
      idToken: IdToken,
      audience: [GOOGLE_CLIENT_ID, GOOGLE_CLIENT_ID_ANDROID],
    })
    res.payload = ticket.getPayload();
    next()
  } catch (err) {
    res.status(400).json({
      err: {
        name: err.name,
        message: err.message,
      },
    })
  }
}

const handleLoginRegisterGoogle = async (req, res) => {
  try {
    const data = res.payload

    const [user] = await User.findOrCreate({
      where: { googleId: data.sub },
      defaults: {
        name: data.given_name,
        email: data.email,
        image: data.picture,
        roleId: 2,
      },
    });
    const accessToken = createToken({ user });
    const accesstToken = accessToken[0];
    const refreshToken = accessToken[1];

    await User.update(
      { refreshToken },
      {
        where: {
          id: user.id,
        },
      },
    );
    res
      .cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: 'login success',
        user: {
          id: user.id,
          email: user.email,
          accesstToken,
        },
      });
  } catch (err) {
    res
      .status(401)
      .json({ error: { err, name: err.name, message: err.message } });
  }
}

const registerTest = ((roles) => (async (req, res, next) => {
  const email = req.body.email.toLowerCase();
  const {
    name, password, confirmationPassword, birthDate, gender, phone,
  } = req.body;
  const role = roles !== 1 || null ? 2 : 1;
  if (password !== confirmationPassword) {
    res.status(401).json({ message: 'password doesn`t match' });
  }
  try {
    const encryptedPassword = await encryptPassword(password);

    const user = await User.create({
      name,
      email,
      encryptedPassword,
      birthDate: new Date(birthDate).toISOString(),
      gender,
      phone,
      roleId: role,
    });
    res.status(200).json({ message: 'Register Success' })
    req.payload = user
    next()
  } catch (err) {
    res.status(400).json({ err: { name: err.name, message: err.message } })
  }
}))
const register = async (req, res, roles) => {
  const email = req.body.email.toLowerCase();
  const {
    name, password, confirmationPassword, birthDate, gender, phone,
  } = req.body;
  const role = roles !== 1 ? 2 : 1;
  if (password !== confirmationPassword) {
    res.status(401).json({ message: 'password doesn`t match' });
    return;
  }
  try {
    const encryptedPassword = await encryptPassword(password);

    const user = await User.create({
      name,
      email,
      encryptedPassword,
      birthDate: new Date(birthDate).toISOString(),
      gender,
      phone,
      roleId: role,
    });
    res.status(200).json('Register success')
  } catch (err) {
    res.status(400).json({ err: { name: err.name, message: err.message } })
  }
};

const registerAdmin = async (req, res) => {
  register(req, res, 1);
};

const login = async (req, res) => {
  const email = req.body.email.toLowerCase();
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
    name: user.name,
    image: user.image,
    email: user.email,
    birthDate: user.birthDate,
    gender: user.gender,
    phone: user.phone,
    roleId: user.roleId,
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
    const refreshToken = req.body.refreshToken === undefined || req.body.refreshToken === null
      ? req.cookies.refreshToken
      : req.body.refreshToken;
    if (!refreshToken) {
      res.status(204).send('null');
      return;
    }
    const user = await User.findAll({
      where: {
        refreshToken,
      },
    });
    if (!user[0]) {
      res.status(204).send('notfound');
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
    if (!user) {
      res.sendStatus(403);
      return;
    }
    jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.sendStatus(403);
        return;
      }
      const userId = user.id;
      const {
        email, createdAt, updatedAt, roleId,
      } = user;
      const accessToken = jwt.sign(
        {
          id: user.id,
          name: user.name,
          image: user.image,
          email: user.email,
          birthDate: user.birthDate,
          gender: user.gender,
          phone: user.phone,
          roleId: user.roleId,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: '6h',
        },
      );
      res.json({
        userId,
        email,
        accessToken,
      });
    });
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
  handleLoginRegisterGoogle,
  handleGoogleAuthUrl,
  handleGoogleAuthCb,
  verifyIdToken,
  register,
  registerTest,
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
