'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Flight,{
        foreignKey : 'airplaneId'
      })
    }
  }
  Airplane.init({
    icao: DataTypes.STRING,
    model: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airplane',
    timestamps: false,
  });
  return Airplane;
};