'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Specialization.hasMany(models.Doctor_specialization,{
        foreignKey: "specializationId",
        onDelete:"CASCADE"
      });
    }
  }
  Specialization.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Specialization',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Specialization;
};