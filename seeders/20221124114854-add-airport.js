'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const timestamp = new Date()
    await queryInterface.bulkInsert('Airports',[
     {
     iata: 'CGK',
     name : 'Soekarno-Hatta International Airport',
     city : 'Jakarta',
     country: 'Indonesia',
     createdAt : timestamp,
     updatedAt : timestamp
    },
    {
      iata: 'YIA',
      name : 'Yogyakarta International Airport',
      city : 'Yogyakarta',
      country: 'Indonesia',
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
  }
};
