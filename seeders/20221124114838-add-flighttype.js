'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  const timestamp = new Date()
   await queryInterface.bulkInsert('FlightTypes',[
    {
    name: 'Domestic',
    createdAt : timestamp,
    updatedAt : timestamp
   },
   {
    name: 'International',
    createdAt : timestamp,
    updatedAt : timestamp
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
    await queryInterface.bulkDelete('FlightTypes', null, { truncate: true, cascade: true })

  }
};
