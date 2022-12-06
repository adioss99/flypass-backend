'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
<<<<<<< HEAD
      // define association here
=======
      this.belongsToMany(models.Booking, {
        through: 'PassengerBooking',
        foreignKey: 'passengerId'
      })
>>>>>>> ea5e64683cac2ccb42de8319958ccceeeb62e040
    }
  }
  Passenger.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
<<<<<<< HEAD
    email: DataTypes.STRING,
    identityType: DataTypes.STRING,
    indentityNumber: DataTypes.STRING
=======
    identityType: DataTypes.STRING,
    identityNumber: DataTypes.STRING,
    age: DataTypes.STRING
>>>>>>> ea5e64683cac2ccb42de8319958ccceeeb62e040
  }, {
    sequelize,
    modelName: 'Passenger',
  });
  return Passenger;
};