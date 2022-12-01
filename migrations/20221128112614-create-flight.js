"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightCode: {
        type: Sequelize.STRING
      },
      airlineId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Airlines",
          },
          key: "id",
        },
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Airplanes",
          },
          key: "id",
        },
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Airports",
          },
          key: "id",
        },
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Airports",
          },
          key: "id",
        },
      },
      departureDate: {
        type: Sequelize.DATEONLY,
      },
      arrivalDate: {
        type: Sequelize.DATEONLY,
      },
      departureTime: {
        type: Sequelize.TIME
      },
      arrivalTime:{
        type: Sequelize.TIME
      },
      duration: {
        type: Sequelize.TIME,
      },
      flightTypeId: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      flightClassId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "FlightClasses",
          },
          key: "id",
        },
      },
      baggage: {
        type: Sequelize.INTEGER,
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
