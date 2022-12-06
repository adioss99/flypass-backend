const { Transactionmethod } = require('../../models');

const savePayment = async (req, res) => {
  const transcation = new Transactionmethod(req.body);
  try {
    const insertpayment = await transcation.save();
    res.status(201).json(insertpayment);
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

const getallPayment = async (req, res) => {
  try {
    const insertPayment = await Transactionmethod.findAll();
    res.json(insertPayment);
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
    const deletepayment = await Transactionmethod.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json(deletepayment);
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
  savePayment,
  getallPayment,
  deletePayment,
};
