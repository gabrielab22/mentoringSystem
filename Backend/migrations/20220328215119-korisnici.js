'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('korisnici', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM('mentor', 'student'),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('none', 'redovni', 'izvanredni'),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('korisnici');
  }
};