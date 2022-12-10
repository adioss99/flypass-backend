// getall transaction
// konfirmasi (acc,reject)

const { Transaction, Transactionmethod } = require('../../models');
const { inc } = require('./transactionmethodController');

const trtAttr = ['name', 'accountNumber'];

const updateTransaction = async (req, res) => {
  try {
    const bookingId = req.booking.id;
    const {
      ispayed,
    } = req.body;

    await Transaction.update(
      {
        ispayed,
      },
      { where: { id: bookingId } },
    );

    res.status(200).json({
      message: ' updated successfully',
      bookingId,
    });
  } catch (error) {
    res.status(400).json({
      message: 'error',
    });
  }
};

const getalltranscation = async (req, res) => {
  try {
    const bookingId = req.booking.id;
    const pay = await Transaction.findAll({
      include: [
        {
          model: Transactionmethod,
          attributes: trtAttr,
          include: inc,
        },
      ],
      where: { bookingId },
    });
    const data = [];
    pay.forEach((element) => {
      data.push(element.Transactionmethod);
    });
    res.status(201).json({ pay });
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
  getalltranscation,
  updateTransaction,
}
