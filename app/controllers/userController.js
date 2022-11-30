const { User } = require('../../models');
const cloudinary = require('../utils/cloudinary');

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const profile = await User.findByPk(userId, { attributes: ['id', 'name', 'email', 'phone', 'image', 'roleId'] });
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
      name, phone,
    } = req.body;

    const email = req.body.email.toLowerCase();
    const getEmail = await User.findOne({ where: { email } });
    if (getEmail && email !== req.user.email) {
      res.status(401).json({ message: 'email is already used' });
      return;
    }

    const profile = await User.findByPk(userId, { attributes: ['image', 'imageId'] });
    let img = profile.image;
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

module.exports = {
  updateProfiles,
  getProfile,
};