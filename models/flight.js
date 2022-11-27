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
        this.belongsTo(models.Flight, {
          foreignKey: "airplaneId",
        });
      this.hasMany(models.Ticket, {
        foreignKey: "id",
      });
    }
  }
  Flight.init(
    {
      airlineId : DataTypes.INTEGER,
      airplaneId : DataTypes.INTEGER,
      departureAirportId: DataTypes.INTEGER,
      arrivalAirportId: DataTypes.INTEGER,
      departureDate: DataTypes.DATE,
      arrivalDate: DataTypes.DATE,
      duration: DataTypes.TIME,
      flightTypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
