const bcrypt = require('bcryptjs');
const randomstring = require('randomstring');
const { User, Role, ResetPasswordToken } = require('../../models');
const cloudinary = require('../utils/cloudinary');

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

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const profile = await User.findByPk(userId, { attributes: ['id', 'name', 'gender', 'birthDate', 'email', 'phone', 'image', 'roleId'] });
    res.status(200).json({
      profile,
    });
  } catch (error) {
    res.status(400).json({
      message: 'error',
    });
  }
};

const updateProfiles = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      name, phone, gender, birthDate,
    } = req.body;

    const email = req.body.email.toLowerCase();
    const getEmail = await User.findOne({ where: { email } });
    if (getEmail && email !== req.user.email) {
      res.status(401).json({ message: 'email is already used' });
      return;
    }

    const profile = await User.findByPk(userId, { attributes: ['image', 'imageId'] });
    let img = profile.Image;
    let imgId = profile.imageId;

    if (req.file !== undefined) {
      const fileBase64 = req.file.buffer.toString('base64');
      const file = `data:${req.file.mimetype};base64,${fileBase64}`;
      const imgCloud = await cloudinary.uploader.upload(file, { folder: 'profile' });
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
      img = imgCloud.url;
      imgId = imgCloud.public_id;
    }

    await User.update(
      {
        name,
        email,
        phone,
        gender,
        birthDate,
        image: img,
        imageId: imgId,
      },
      { where: { id: userId } },
    );

    res.status(200).json({
      message: 'Profile updated successfully',
      userId,
    });
  } catch (error) {
    res.status(400).json({
      message: 'error',
    });
  }
};

const getAlluser = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'name', 'gender', 'birthDate', 'email', 'phone', 'image'],
      include: Role,
      order: [['roleId', 'ASC']],
    });
    res.status(201).json({ users });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const changepassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { olddpassword } = req.body;
    const { newpassword, Newconfirmpassword } = req.body;

    const isMatch = await bcrypt.compare(
      olddpassword,
      req.user.encryptedPassword,
    );
    if (!isMatch) {
      res.status(404).json({ message: 'Wrong password' })
      return;
    }
    if (newpassword !== Newconfirmpassword) {
      res.status(401).json({ message: 'password doesn`t match' });
      return;
    }

    const encryptedPassword = await encryptPassword(Newconfirmpassword);

    await User.update(
      {
        encryptedPassword,
      },
      { where: { id: userId } },
    );
    res.status(201).json({
      message: 'Update password success',
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

const resetPassword = async (req, res, next) => {
  try {
    const mail = req.body.email.toLowerCase();
    const user = await User.findOne({ where: { email: mail } });
    if (!user) {
      res.status(404).json({ message: 'user not found' });
      return;
    }
    const token = randomstring.generate(8);
    const request = await ResetPasswordToken.create({ userEmail: user.email, token });
    req.payload = request;
    res.status(201).json({ message: 'check your email' });
    next();
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

const createNewPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body
    const request = await ResetPasswordToken.findOne({ where: { token } });
    if (!request) {
      res.status(404).json({ message: 'invallid token' });
      return;
    }
    const encryptedPassword = await encryptPassword(newPassword);
    await request.destroy();
    await User.update({ encryptedPassword }, { where: { email: request.userEmail } });
    res.status(201).json({ message: ' reset password success' });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

module.exports = {
  updateProfiles,
  changepassword,
  getProfile,
  getAlluser,
  resetPassword,
  createNewPassword,
};
