'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.TicketClass,{
        foreignKey:'ticketClassId'
      })
      this.belongsTo(models.Flight,{
        foreignKey:'flightId'
      })
    }
  }
  Ticket.init({
    flightId: DataTypes.INTEGER,
    ticketClassId: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};