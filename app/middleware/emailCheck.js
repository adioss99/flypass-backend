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

module.exports = emailExist;
