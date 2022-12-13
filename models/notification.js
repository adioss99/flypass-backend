'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notification.init(
    {
      message: DataTypes.STRING,
      bookingCode: DataTypes.STRING,
      bookingId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      isRead: DataTypes.BOOLEAN,
      admin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Notification',
    }
  );
  return Notification;
};