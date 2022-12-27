'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class walletHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here  
      this.belongsTo(models.Wallet, {
        foreignKey: 'walletId',
      });
      this.belongsTo(models.Booking, {
        foreignKey: 'bookingId',
      });
    }
  }
  walletHistory.init({
    walletId: DataTypes.INTEGER,
    balance: DataTypes.INTEGER,
    type: DataTypes.STRING,
    bookingId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'walletHistory',
  });
  return walletHistory;
};