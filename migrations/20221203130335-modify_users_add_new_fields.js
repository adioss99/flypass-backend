'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users', // table name
        'birthDate', // new field name
        {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Users',
        'gender',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
    ])
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
