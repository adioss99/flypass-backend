'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Airports'
          },
          key: 'id'
        }
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Airports'
          },
          key: 'id'
        }
      },
      departureDate: {
        type: Sequelize.DATE
      },
      arrivalDate: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.TIME
      },
      flightTypeId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};