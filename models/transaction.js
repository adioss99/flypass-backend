"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * 
     */
    static associate(models) {
      // define association here  
      this.belongsTo(models.Booking, {
        foreignKey: 'bookingId',
      });
    }
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
