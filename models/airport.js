'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Flight,{
        foreignKey : 'departureAirportId',
      })
      this.hasMany(models.Flight,{
        foreignKey : 'arrivalAirportId',
      })
    }
  }
  Airport.init({
    iata: DataTypes.STRING,
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};