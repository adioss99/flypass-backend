'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    userId: DataTypes.INTEGER,
    bookingCode: DataTypes.STRING,
    roundtrip: DataTypes.BOOLEAN,
    flight1Id: DataTypes.INTEGER,
    flight2Id: DataTypes.INTEGER,
    totalPrice: DataTypes.DOUBLE,
    bookingStatusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};