const { Notification } = require('../../models');
// const notif = require('../utils/socket');
const getNotification = async (isAdmin) => {
  const notification = await Notification.findAll({ where: { admin: isAdmin } }, { order: [['createdAt', 'ASC']] });
  const count = await Notification.count({ where: { admin: isAdmin, isRead: false } }, { order: [['createdAt', 'ASC']] });
  return [count, notification];
};

const createNotification = async (message, bookingCode, bookingId, isAdmin, userId) => {
  await Notification.create({
    message,
    bookingCode,
    bookingId,
    isRead: false,
    admin: isAdmin,
    userId,
  });
};

const updateNotification = async (req, res) => {
  try {
    const { id } = req.params;
    await Notification.update(
      {
        isRead: true,
      },
      { where: { id } },
    );
    res.status(201).json({ message: 'notification updated' });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const getNotificationUser = async (req, res) => {
  try {
    const notification = await getNotification(false);
    res.status(201).json({ newNotification: notification[0], notification: notification[1] });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const getNotificationAdmin = async (req, res) => {
  try {
    const notification = await Notification.findAll({ where: { admin: true } }, { order: [['createdAt', 'ASC']] });
    res.status(201).json({ notification });
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
  createNotification,
  updateNotification,
  getNotificationUser,
  getNotificationAdmin,
};
