'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const timestamp = new Date()
    await queryInterface.bulkInsert('FlightClasses',[
     {
     name: 'Economy',
     createdAt : timestamp,
     updatedAt : timestamp
    },
    {
     name: 'Business',
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
    await queryInterface.bulkDelete('FlightClasses', { truncate: true, cascade: true })

  }
};
