"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Transaction.init(
    {
      bookingId: DataTypes.INTEGER,
      Image: DataTypes.STRING,
      ImageId: DataTypes.STRING,
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
