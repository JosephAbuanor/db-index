'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Doctor_hospital.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
        onDelete: "CASCADE"
      });

      Doctor_hospital.belongsTo(models.Hospital, {
        foreignKey: "hospitalId",
        onDelete: "CASCADE"
      });
    }
  };
  Doctor_hospital.init({

  }, {
    sequelize,
    modelName: 'Doctor_hospital',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Doctor_hospital;
};