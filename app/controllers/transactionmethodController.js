const { Transactionmethod } = require('../../models');

const savePayment = async (req, res) => {
  try {
    const { name, accountNumber } = req.body;
    const newpayment = await Transactionmethod.create({
      name,
      accountNumber,
    });
    res.json({ msg: 'succes', newpayment });
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
};
