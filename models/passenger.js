'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Booking, {
        through: 'PassengerBooking',
        foreignKey: 'passengerId'
      })
    }
  }
  Passenger.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    identityType: DataTypes.STRING,
    identityNumber: DataTypes.STRING,
    age: DataTypes.STRING,
    baggage: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'Passenger',
  });
  return Passenger;
};