'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PassengerBooking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Passenger,{
        foreignKey: 'passengerId'
      })
      this.belongsTo(models.Booking,{
        foreignKey: 'bookingId'
      })
    }
  }
  PassengerBooking.init({
    passengerId: DataTypes.INTEGER,
    bookingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PassengerBooking',
  });
  return PassengerBooking;
};