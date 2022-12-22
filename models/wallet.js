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
      // define association here
      this.hasMany(models.walletHistory, { foreignKey: 'walletId' });
    }
  }
  Wallet.init(
    {
      balance: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      pin: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Wallet',
    }
  );
  return Wallet;
};