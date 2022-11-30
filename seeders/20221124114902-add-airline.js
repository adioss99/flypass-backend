'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const timestamp = new Date()
    await queryInterface.bulkInsert('Airlines', [
      {
        iata: 'GA',
        name: 'Garuda Indonesia',
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1669640315/airlines/x51zrga3kcoktz3eihfo.png',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ]);
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
