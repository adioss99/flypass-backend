'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PassengerBookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      passengerId: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'Passengers'
          }
        }
      },
      bookingId: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'Bookings'
          }
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
    await queryInterface.dropTable('PassengerBookings');
  }
};