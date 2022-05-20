'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_specialization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor_specialization.belongsTo(models.Doctor,{
        foreignKey: "doctorId",
        onDelete: "CASCADE"
      });

      Doctor_specialization.belongsTo(models.Specialization,{
        foreignKey: "specializationId",
        onDelete:"CASCADE"
      });
    }
  };
  Doctor_specialization.init({
    practiceYear: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Doctor_specialization',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Doctor_specialization;
};