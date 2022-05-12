'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doc.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    specialization: DataTypes.STRING,
    practiceYear: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    hospital: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doc',
  });
  return Doc;
};