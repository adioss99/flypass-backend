'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FlightType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Flight,{
        foreignKey: 'flightTypeId'
      })
    }
  }
  FlightType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FlightType',
  });
  return FlightType;
};