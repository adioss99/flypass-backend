const { User } = require('../../models');

const emailExist = async (req, res, next) => {
  const email = req.body.email.toLowerCase();
  const getEmail = await User.findOne({ where: { email } });
  if (getEmail) {
    res.status(401).json({ message: 'email is already used' })
    return
  }
  next()
}

const emailNull = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(401).json({ message: 'email can`t be empty' });
    return;
  }
  next();
};

module.exports = {
  emailExist,
  emailNull,
};
