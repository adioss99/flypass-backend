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
      this.hasOne(models.City,{
        foreignKey: 'cityId'
      }),
      this.belongsToMany(models.Flight,{
        foreignKey : 'departureAirportId',
        foreignKey : 'arrivalAirportId'
        
      })
    }
  }
  Airport.init({
    name: DataTypes.STRING,
    iata: DataTypes.STRING,
    cityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};