'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.City,{
        foreignKey:'countryId'
      })
    }
  }
  Country.init({
    name: DataTypes.STRING,
    iso3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};