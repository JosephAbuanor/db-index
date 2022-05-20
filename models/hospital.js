'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hospital.hasMany(models.Doctor_hospital,{
        foreignKey: "hospitalId",
        onDelete:"CASCADE"
      });
    }
  };
  Hospital.init({
    name: DataTypes.STRING,
    zip: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hospital',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Hospital;
};