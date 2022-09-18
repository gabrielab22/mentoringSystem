'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('upisi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'korisnici',
          key: 'id',
          as: 'student_id'
        }
      },
      predmet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'predmeti',
          key: 'id',
          as: 'predmet_id'
        }
      },
      status: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('upisi');
  }
};