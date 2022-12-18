const { Notification } = require('../../models');

const getNotification = async (props) => {
  const notification = await Notification.findAll({
    where: props,
    order: [['createdAt', 'DESC']],
  });
  return notification;
};

const countNewNotification = async (props) => {
  const count = await Notification.count({
    where: props,
  });
  return count
}

const createNotification = async (message, bookingCode, bookingId, isAdmin, userId) => {
  const newNotif = await Notification.create({
    message,
    bookingCode,
    bookingId,
    isRead: false,
    admin: isAdmin,
    userId,
  });
  if (isAdmin) {
    global.io.to('admin').emit('notif-to-admin', newNotif);
    return
  }
  const room = userId.toString()
  global.io.to(room).emit('notif-to-user', newNotif);
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

const deleteNotification = async (req, res) => {
  try {
    const uId = req.params.id
    await Notification.destroy({ where: { id: uId } })
    res.status(201).json({ message: 'notification deleted' })
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
}

const getNotificationUser = async (req, res) => {
  try {
    const uId = req.user.id;
    const notification = await getNotification({ userId: uId, admin: false });
    const newNotification = await countNewNotification({
      userId: uId, admin: false, isRead: false,
    });
    res.status(200).json({ newNotification, notification });
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
    const notification = await getNotification({ admin: true });
    const newNotification = await countNewNotification({
      admin: true,
      isRead: false,
    });
    res.status(200).json({ newNotification, notification });
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
  deleteNotification,
};
