"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable("Whistlists", "Wishlists");
    await queryInterface.removeConstraint('Wishlists','Whistlists_pkey')
    await queryInterface.addConstraint('Wishlists',{
      fields: ["id"],
      type: "primary key",
      name: "Wishlists_pkey"
    })
    await queryInterface.addConstraint("Wishlists", {
      fields: ["flightId"],
      type: "foreign key",
      name: "Wishlists_fligtId_fkey",
      references: {
        //Required field
        table: "Flights",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
