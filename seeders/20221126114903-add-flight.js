'use strict';
const moment = require('moment')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const timestamp = new Date()
    await queryInterface.bulkInsert('Flights',[
      {
        flightCode : 'GA-718',
        airlineId : 1,
        airplaneId : 1,
        departureAirportId: 1,
        arrivalAirportId: 2,
        departureDate: timestamp,
        arrivalDate: timestamp,
        departureTime: timestamp,
        arrivalTime: timestamp,
        duration: timestamp,
        flightTypeId: 1,
        price: 500000,
        flightClassId: 1,
        createdAt : timestamp,
        updatedAt : timestamp,
     },
     {
      flightCode : 'GA-721',
      airlineId : 1,
      airplaneId : 1,
      departureAirportId: 2,
      arrivalAirportId: 1,
      departureDate: timestamp,
      arrivalDate: timestamp,
      departureTime: timestamp,
      arrivalTime: timestamp,
      duration: timestamp,
      flightTypeId: 1,
      price: 650000,
      flightClassId: 1,
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
