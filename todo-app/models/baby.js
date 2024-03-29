'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Baby extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Baby.init({
    name: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    weight: DataTypes.FLOAT,
    height: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Baby',
  });
  return Baby;
};