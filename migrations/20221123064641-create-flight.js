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
      departure: {
        type: Sequelize.DATE
      },
      arrival: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.TIME
      },
      price: {
        type: Sequelize.DOUBLE
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Airports'
          },
          key : 'id'
        }
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Airports'
          },
          key : 'id'
        }
      },
      airlinesId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Airlines'
          },
          key : 'id'
        }
      },
      airplanesId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Airplanes'
          },
          key : 'id'
        }
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