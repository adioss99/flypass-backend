'use strict';
const bcrypt = require("bcryptjs");




module.exports = {
  async up (queryInterface, Sequelize) {
    const password = "123456";
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const timestamp = new Date();

    await queryInterface.bulkInsert('Users',[{
      name : 'John Doe',
      email : 'johndoe@mail.com',
      encryptedPassword,
      roleId : 1,
      createdAt: timestamp,
      updatedAt: timestamp,
    }]);
  },

  async down (queryInterface, Sequelize) {
 
  }
};
