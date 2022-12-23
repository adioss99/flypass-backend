'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Role, {
        foreignKey: 'roleId',
      });
      this.hasMany(models.Booking,{
        foreignKey: 'userId'
      })
      this.hasMany(models.UserEmailConfirmation,{
        foreignKey: 'userId'
      })
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      encryptedPassword: DataTypes.STRING,
      image: DataTypes.STRING,
      imageId: DataTypes.STRING,
      phone: DataTypes.STRING,
      birthDate: DataTypes.STRING,
      gender: DataTypes.STRING,
      isVerified: DataTypes.BOOLEAN,
      googleId: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      refreshToken: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};