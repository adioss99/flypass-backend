'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Airport,{
        foreignKey : 'airportId'
      })
    }
  }
  Flight.init({
    departure: DataTypes.DATE,
    arrival: DataTypes.DATE,
    duration: DataTypes.TIME,
    price: DataTypes.DOUBLE,
    capacity: DataTypes.INTEGER,
    departureAirportId: DataTypes.INTEGER,
    arrivalAirportId: DataTypes.INTEGER,
    airlinesId: DataTypes.INTEGER,
    airplanesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};