'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const timestamp = new Date()
    await queryInterface.bulkInsert('Flights',[
      {
        departureAirportId: 1,
        arrivalAirportId: 2,
        departureDate: timestamp,
        arrivalDate: timestamp,
        duration: timestamp,
        flightTypeId: 1,
        createdAt : timestamp,
        updatedAt : timestamp,
     },
     {
      departureAirportId: 2,
      arrivalAirportId: 1,
      departureDate: timestamp,
      arrivalDate: timestamp,
      duration: timestamp,
      flightTypeId: 1,
      createdAt : timestamp,
      updatedAt : timestamp,
     }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
