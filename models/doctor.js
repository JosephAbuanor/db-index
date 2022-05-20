'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.hasMany(models.Doctor_specialization, {
        foreignKey: "doctorId",
        onDelete: "CASCADE"
      });

      Doctor.hasMany(models.Doctor_hospital, {
        foreignKey: "doctorId",
        onDelete: "CASCADE"
      });
    }
  }
  Doctor.init({
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Doctor;
};