const { Transactionmethod } = require('../../models');
const cloudinary = require('../utils/cloudinary');

const imageUploader = async (req, res, fileBase64) => {
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;
  const imgCloud = await cloudinary.uploader.upload(file, {
    folder: 'Transactionmethod',
  });
  const image = imgCloud.url;
  const imageId = imgCloud.public_id;
  return [image, imageId];
};

const savePayment = async (req, res) => {
  try {
    const { name, accountNumber } = req.body;

    const fileBase64 = req.file.buffer.toString('base64');
    const img = await imageUploader(req, res, fileBase64);

    const newpayment = await Transactionmethod.create({
      name,
      accountNumber,
      image: img[0],
      imageId: img[1],
    });
    res.json({ msg: 'successfully Please wwait', newpayment });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

const deletePayment = async (req, res) => {
  try {
    await Transactionmethod.destroy({ where: { id: req.params.id } });
    res.status(202).json({ message: `payment ${req.params.id} is deleted` });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const getallPayment = async (req, res) => {
  try {
    const payment = await Transactionmethod.findAll();
    res.status(201).json({ payment });
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
  savePayment,
  getallPayment,
  deletePayment,
};
