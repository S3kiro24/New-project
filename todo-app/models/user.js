'use strict';
const { Model } = require('sequelize');
const passportLocalMongoose = require('passport-local-mongoose');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }

  passportLocalMongoose.User = User; // This line is important

  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.sync(); // This line ensures that the user model is synchronized with the database

  return User;
};
