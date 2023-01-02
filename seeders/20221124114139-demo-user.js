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
        image: 'https://res.cloudinary.com/dgndyivi9/image/upload/v1671626833/Users-Administrator-icon_oxtg54.png',
        createdAt: timestamp,
        updatedAt: timestamp,
        isVerified: true,
      },
      {
        name: 'Rigan Rahmadin',
        email: 'rigan@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dgndyivi9/image/upload/v1671626833/Users-Administrator-icon_oxtg54.png',
        createdAt: timestamp,
        updatedAt: timestamp,
        isVerified: true,
      },
      {
        name: 'Sasmito Adi',
        email: 'adi@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dgndyivi9/image/upload/v1671626833/Users-Administrator-icon_oxtg54.png',
        createdAt: timestamp,
        updatedAt: timestamp,
        isVerified: true,
      },
      {
        name: 'Haikal Arif',
        email: 'haikal@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dgndyivi9/image/upload/v1671626833/Users-Administrator-icon_oxtg54.png',
        createdAt: timestamp,
        updatedAt: timestamp,
        isVerified: true,
      },
      {
        name: 'Syahbandar Pujangga',
        email: 'angga@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dgndyivi9/image/upload/v1671626833/Users-Administrator-icon_oxtg54.png',
        createdAt: timestamp,
        updatedAt: timestamp,
        isVerified: true,
      },
      {
        name: 'Pahrurozi',
        email: 'pahrurozi@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dgndyivi9/image/upload/v1671626833/Users-Administrator-icon_oxtg54.png',
        createdAt: timestamp,
        updatedAt: timestamp,
        isVerified: true,
      },
      {
        name: 'Zahir Abdul ',
        email: 'zahir@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dgndyivi9/image/upload/v1671626833/Users-Administrator-icon_oxtg54.png',
        createdAt: timestamp,
        updatedAt: timestamp,
        isVerified: true,
      },
      {
        name: 'Dwika Putra',
        email: 'dwika@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dgndyivi9/image/upload/v1671626833/Users-Administrator-icon_oxtg54.png',
        createdAt: timestamp,
        updatedAt: timestamp,
        isVerified: true,
      },
      {
        name: 'Syifa Septiana',
        email: 'syifa@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dgndyivi9/image/upload/v1671626833/Users-Administrator-icon_oxtg54.png',
        createdAt: timestamp,
        updatedAt: timestamp,
        isVerified: true,
      },
      {
        name: 'John Doe',
        email: 'johndoe@flypass.com',
        encryptedPassword,
        roleId: 1,
        image: 'https://res.cloudinary.com/dgndyivi9/image/upload/v1671626833/Users-Administrator-icon_oxtg54.png',
        createdAt: timestamp,
        updatedAt: timestamp,
        isVerified: true,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true  })
 
  }
};
