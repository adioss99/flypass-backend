const { Transaction, Booking } = require('../../models');
const cloudinary = require('../utils/cloudinary');
const { createNotification } = require('./notificationController');

const imageUploader = async (req, res, fileBase64) => {
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;
  const imgCloud = await cloudinary.uploader.upload(file, {
    folder: 'Transaction',
  });
  const image = imgCloud.url;
  const imageId = imgCloud.public_id;
  return [image, imageId];
};

const findBooking = async (params) => {
  const book = await Booking.findByPk(params)
  return book
}

const transactionHandle = async (req, res) => {
  try {
    const fileBase64 = req.file.buffer.toString('base64');
    const img = await imageUploader(req, res, fileBase64);
    const { bookingId } = req.params;
    const transaction = await Transaction.create({
      bookingId,
      datePayed: new Date(),
      isPayed: false,
      Image: img[0],
      ImageId: img[1],
    });
    await Booking.update(
      { bookingStatusId: 2 },
      {
        where: { id: transaction.bookingId },
      },
    );
    await createNotification('Payment need to be verificated', null, bookingId, true, null);
    res.status(201).json({ message: 'created successfully', bookingId });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const getBookingTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findAll({ where: { bookingId: req.params.bookingId } });
    res.status(201).json({ transaction });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const getalltransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findAll();
    res.status(201).json({ transaction });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const handlepayment = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.bookingId);
    const fileBase64 = req.file.buffer.toString('base64');
    const img = await imageUploader(req, res, fileBase64);
    await transaction.update({
      Image: img[0],
      imageId: img[1],
      datePayed: new Date(),
    })
    res
      .status(201)
      .json({ message: 'updated successfully', transaction });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const handleConfirmPayment = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.bookingId);
    await transaction.update({
      isPayed: true,
    });

    await Booking.update(
      { bookingStatusId: 3 },
      {
        where: { id: transaction.bookingId },
      },
    );
    const booking = await findBooking(transaction.bookingId);
    if (booking.userId) {
      await createNotification('Your payment has been verificated', booking.bookingCode, booking.id, false, booking.userId);
    }
    res.status(201).json({
      message: 'Payment Success',
      transaction,
    });
  } catch (err) {
    res.status(422).json({
      err: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const handleRejectPayment = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.bookingId);
    await transaction.update({
      isPayed: false,
    });
    await Booking.update(
      { bookingStatusId: 4 },
      {
        where: { id: transaction.bookingId },
      },
    );
    const booking = await findBooking(transaction.bookingId);
    if (booking.userId) {
      await createNotification('Your payment rejected', booking.bookingCode, booking.id, false, booking.userId);
    }
    res.status(201).json({
      message: 'Payment rejected',
      transaction,
    });
  } catch (err) {
    res.status(422).json({
      err: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

module.exports = {
  handlepayment,
  getBookingTransaction,
  getalltransaction,
  handleConfirmPayment,
  handleRejectPayment,
  transactionHandle,
};
