'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    const password = "123456";
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const timestamp = new Date();

    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'johndoe@mail.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1669690246/profile/x0svvtfubjg7ulpg0im3.jpg',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
 
  }
};
