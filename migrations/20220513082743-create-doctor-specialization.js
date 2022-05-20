'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doctor_specializations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorId: {
        references: {
          key: "id",
          model: "Doctors"
        },
        type: Sequelize.UUID,
        onDelete: "CASCADE"
      },

      specializationId: {
        references: {
          key: "id",
          model: "Specializations"
        },
        type: Sequelize.INTEGER,
        onDelete: "CASCADE"
      },
      practiceYear: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Doctor_specializations');
  }
};