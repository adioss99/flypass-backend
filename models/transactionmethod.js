'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactionmethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transactionmethod.init({
    name: DataTypes.STRING,
    accountNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transactionmethod',
  });
  return Transactionmethod;
};