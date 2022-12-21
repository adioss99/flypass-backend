'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    const password = "123456";
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const timestamp = new Date();

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Adam Satria ',
        email: 'adam@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1671552544/Users-Administrator-icon_j9j3ce.png',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: 'Rigan Rahmadin',
        email: 'rigan@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1671552544/Users-Administrator-icon_j9j3ce.png',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: 'Sasmito Adi',
        email: 'adi@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1671552544/Users-Administrator-icon_j9j3ce.png',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: 'Haikal Arif',
        email: 'haikal@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1671552544/Users-Administrator-icon_j9j3ce.png',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: 'Syahbandar Pujangga',
        email: 'angga@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1671552544/Users-Administrator-icon_j9j3ce.png',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: 'Pahrurozi',
        email: 'pahrurozi@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1671552544/Users-Administrator-icon_j9j3ce.png',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: 'Zahir Abdul ',
        email: 'zahir@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1671552544/Users-Administrator-icon_j9j3ce.png',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: 'Dwika Putra',
        email: 'dwika@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1671552544/Users-Administrator-icon_j9j3ce.png',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: 'Syifa Septiana',
        email: 'syifa@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1671552544/Users-Administrator-icon_j9j3ce.png',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: 'John Doe',
        email: 'johndoe@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dixlrulen/image/upload/v1671552544/Users-Administrator-icon_j9j3ce.png',
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', { truncate: true, cascade: true })
 
  }
};
