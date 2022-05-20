'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doctor_hospitals', {
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

      hospitalId: {
        references: {
          key: "id",
          model: "Hospitals"
        },
        type: Sequelize.INTEGER,
        onDelete: "CASCADE"
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Doctor_hospitals');
  }
};