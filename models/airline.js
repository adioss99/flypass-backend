"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Flight, {
        foreignKey: "airlineId",
      });
    }
  }
  Airline.init(
    {
      iata: DataTypes.STRING,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      imageId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Airline",
      timestamps: false,
    }
  );
  return Airline;
};
