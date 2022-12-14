'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookingCode: {
        type: Sequelize.STRING
      },
      roundtrip: {
        type: Sequelize.BOOLEAN
      },
      flight1Id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'Flights'
          }
        }
      },
      flight2Id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'Flights'
          }
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'Users'
          }
        }
      },
      passengerContactId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'PassengerContacts'
          }
        }
      },
      bookingStatusId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'BookingStatuses'
          }
        }
      },
      passengerQty: {
        type: Sequelize.INTEGER,
      },
      totalPrice: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('Bookings');
  }
};