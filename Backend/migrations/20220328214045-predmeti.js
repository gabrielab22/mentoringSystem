'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('predmeti', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ime: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kod: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      program: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      bodovi: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      sem_redovni: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      sem_izvanredni: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      izborni: {
        type: Sequelize.ENUM('da', 'ne'),
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
    await queryInterface.dropTable('predmeti');
  }
};