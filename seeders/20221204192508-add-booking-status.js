"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  const timestamp = new Date()
    await queryInterface.bulkInsert("BookingStatuses", [
      {
        name: "Waiting for payment",
        createdAt : timestamp,
        updatedAt : timestamp,
      },
      {
        name: "Paid",
        createdAt : timestamp,
        updatedAt : timestamp,
      },
      {
        name: "Completed",
        createdAt : timestamp,
        updatedAt : timestamp,
      },
      {
        name: "Cancelled",
        createdAt : timestamp,
        updatedAt : timestamp,
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('BookingStatuses')

  },
};
