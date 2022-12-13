"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Transactionmethod, {
        foreignKey: "TransactionMethodId",
      });
    }
  }
  Transaction.init(
    {
      bookingId: DataTypes.INTEGER,
      Image: DataTypes.STRING,
      TransactionMethodId: DataTypes.INTEGER,
      isPayed: DataTypes.BOOLEAN,
      datePayed: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
