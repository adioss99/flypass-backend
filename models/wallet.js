'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.users,{
        foreignKey: 'userId'
      })
    }
  }
  Wallet.init({
    userId: DataTypes.INTEGER,
    balance: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Wallet',
  });
  return Wallet;
};