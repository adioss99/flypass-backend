"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airport, {
        as: 'departureAirport'
      });
      this.belongsTo(models.Airport, {
        foreignKey:'arrivalAirportId',
        as: 'arrivalAirport'
      });
      this.belongsTo(models.FlightType, {
        foreignKey: "flightTypeId",
      });
      this.belongsTo(models.Airline, {
        foreignKey: "airlineId",
      });
      this.belongsTo(models.Airline, {
        foreignKey: "airlineId",
      });
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
      });
      this.belongsTo(models.FlightClass,{
        foreignKey: 'flightClassId'
      })
      this.hasMany(models.Wishlist, {
        foreignKey: 'flightId'
      });
      this.hasMany(models.Booking,{
        foreignKey: 'flight1Id',
        as: 'flight1'
      })
      this.hasMany(models.Booking,{
        foreignKey: 'flight2Id',
        as: 'flight2'
      })
    }
  }
  Flight.init(
    {
      flightCode : DataTypes.STRING,
      airlineId : DataTypes.INTEGER,
      airplaneId : DataTypes.INTEGER,
      departureAirportId: DataTypes.INTEGER,
      arrivalAirportId: DataTypes.INTEGER,
      departureDate: DataTypes.DATEONLY,
      arrivalDate: DataTypes.DATEONLY,
      departureTime: DataTypes.TIME,
      arrivalTime: DataTypes.TIME,
      duration: DataTypes.TIME,
      flightTypeId: DataTypes.INTEGER,
      flightClassId: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      baggage: DataTypes.INTEGER,
      isAvailable: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
