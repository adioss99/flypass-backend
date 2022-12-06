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
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthDate: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      image: DataTypes.STRING,
      imageId: DataTypes.STRING,
      encryptedPassword: DataTypes.STRING,
      refreshToken: DataTypes.TEXT,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};