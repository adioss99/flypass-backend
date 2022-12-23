const bcrypt = require('bcryptjs');
const { Wallet, Booking, walletHistory } = require('../../models');

function encryptPIN(pin) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(pin, 10, (err, encryptedPin) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(encryptedPin);
    });
  });
}

function verificationPIN(encryptedPIN, PIN) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(PIN, encryptedPIN, (err, isPINCorrect) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(isPINCorrect);
    });
  });
}

const findBooking = async (params) => {
  const book = await Booking.findByPk(params);
  return book;
};

const getWallet = async (params) => {
  const wallet = await Wallet.findOne({ where: { userId: params } })
  return wallet
}

const createHistory = async (params) => {
  const request = await walletHistory.create(params);
  return request
}

// >>>>>>>>>>>>
const activateEwallet = async (req, res) => {
  try {
    const user = req.user.id;
    const check = await Wallet.findOne({ where: { userId: user } })
    if (check) {
      res.status(401).json({ message: 'you already have a eWallet' });
      return
    }
    const { pin } = req.body;
    const PIN = await encryptPIN(pin);
    await Wallet.create({ balance: 10000, pin: PIN, userId: user });
    res.status(200).json({ message: 'eWallet activated successfully' });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const getUserWalet = async (req, res) => {
  try {
    const user = req.user.id;
    const wallet = await Wallet.findOne({ where: { userId: user }, attributes: ['id', 'balance', 'createdAt', 'updatedAt'] });
    res.status(200).json({ wallet });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const topUpRequest = async (req, res) => {
  try {
    const user = req.user.id;
    const wallet = await getWallet(user);
    const { amount } = req.body;
    const request = await createHistory({
      walletId: wallet.id,
      balance: amount,
      type: '+',
      bookingId: null,
      status: 'pending',
    });
    res.status(200).json({ message: 'topup request added', request });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

const topUpConfirmation = async (req, res) => {
  try {
    const user = req.user.id;
    const { walletHistoryId } = req.params;
    const history = await walletHistory.findOne({ where: { id: walletHistoryId, status: 'pending' } });
    if (!history) {
      res.status(401).json({ message: 'transaction not found' });
      return;
    }
    const wallet = await getWallet(user);
    history.update({ status: 'success' })
    await wallet.increment('balance', { by: history.balance });
    res.status(200).json({ message: 'balance added successfully' });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const paymentHandler = async (req, res) => {
  try {
    const user = req.user.id;
    const { bookingId } = req.params;
    const { pin } = req.body;
    const wallet = await getWallet(user);
    if (!wallet) {
      res.status(401).json({ message: 'Please activate your wawllet' });
      return;
    }
    const verify = await verificationPIN(wallet.pin, pin);
    if (!verify) {
      res.status(401).json({ message: 'wrong PIN' });
      return;
    }
    const book = await findBooking(bookingId);
    if (wallet.balance < book.totalPrice) {
      res.status(401).json({ message: 'your wallet balance is insufficient' });
      return;
    }
    await createHistory({
      walletId: wallet.id,
      balance: book.totalPrice,
      type: '-',
      bookingId,
      status: 'success',
    });
    await book.update({ bookingStatusId: 3 });
    await wallet.decrement('balance', { by: book.totalPrice });
    res.status(200).json({ message: 'payment success' });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const getWalletHistory = async (req, res) => {
  try {
    const user = req.user.id;
    const wallet = await getWallet(user);
    const history = await walletHistory.findAll({
      where: { walletId: wallet.id },
      attributes: ['id', 'balance', 'type', 'status', 'updatedAt'],
      order: [['updatedAt', 'DESC']],
      include: { model: Booking, attributes: ['id', 'bookingCode'] },
    });
    res.status(200).json({ history });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

const getDetailWalletHistory = async (req, res) => {
  try {
    const { walletHistoryId } = req.params;
    const detail = await walletHistory.findAll({
      where: { id: walletHistoryId },
      attributes: ['id', 'walletId', 'balance', 'type', 'status', 'createdAt', 'updatedAt'],
      order: [['updatedAt', 'DESC']],
      include: { model: Booking, attributes: ['id', 'bookingCode', 'userId', 'totalPrice'] },
    });
    res.status(200).json({ detail });
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
  getUserWalet,
  topUpConfirmation,
  paymentHandler,
  activateEwallet,
  topUpRequest,
  getWalletHistory,
  getDetailWalletHistory,
};
