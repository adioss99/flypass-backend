'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FlightClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Flight,{
        foreignKey: 'flightClassId'
      })
    }
  }
  FlightClass.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FlightClass',
  });
  return FlightClass;
};