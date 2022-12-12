// getall transaction
// konfirmasi (acc,reject)

const { Transaction } = require('../../models');
const cloudinary = require('../utils/cloudinary');

// const method = ['name', 'accountNumber', 'image', 'imageId']

const imageUploader = async (req, res, fileBase64) => {
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;
  const imgCloud = await cloudinary.uploader.upload(file, {
    folder: 'Transaction',
  });
  const image = imgCloud.url;
  const imageId = imgCloud.public_id;
  return [image, imageId];
};

const transactionHandle = async (req, res) => {
  try {
    const fileBase64 = req.file.buffer.toString('base64');
    const img = await imageUploader(req, res, fileBase64);
    const { bookingId, TransactionMethodId } = req.body;
    const transaction = await Transaction.create({
      bookingId,
      TransactionMethodId,
      datePayed: new Date(),
      isPayed: false,
      Image: img[0],
    });
    res.status(201).json({ transaction });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

const gettranscationId = async (req, res) => {
  try {
    // const { transactionId } = req.params.id;
    const transaction = await Transaction.findByPk(
      req.params.id,
    );
    res.status(201).json({ transaction });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

const handlepayment = async (req, res) => {
  try {
    const fileBase64 = req.file.buffer.toString('base64');
    const img = await imageUploader(req, res, fileBase64);
    const { transactionid } = req.body;
    const transaction = await Transaction.findByPk(transactionid)
    // eslint-disable-next-line no-unused-expressions
    await transaction.update({
      Image: img[0],
      isPayed: true,
      datePayed: new Date(),
    // eslint-disable-next-line no-sequences
    }),
    res.status(201).json({ message: 'updated successfully', transaction });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

const handleConfirmPayment = async (req, res) => {
  try {
    // const { transactionId } = req.params.id
    const transaction = await Transaction.findByPk(req.params.id)
    await transaction.update({
      isPayed: true,
    })
    res.status(201).json(
      {
        transaction,
        message: 'Payment Success',
      },
    )
  } catch (err) {
    res.status(422).json({
      err: {
        name: err.name,
        message: err.message,
      },
    })
  }
}
const handleRejectPayment = async (req, res) => {
  try {
    // const { transactionId } = req.body
    const transaction = await Transaction.findByPk(req.params.id)
    await transaction.update({
      isPayed: false,
    })
  } catch (err) {
    res.status(422).json({
      err: {
        name: err.name,
        message: err.message,
      },
    })
  }
}

module.exports = {
  handlepayment,
  gettranscationId,
  handleConfirmPayment,
  handleRejectPayment,
  transactionHandle,
};
