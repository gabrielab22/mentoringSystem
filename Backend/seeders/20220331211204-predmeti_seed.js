
const data = require('../predmeti.json');

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('predmeti', data.map(({ semestar_redovni, semestar_izvanredni, ...rest }) => ({
      sem_redovni: semestar_redovni,
      sem_izvanredni: semestar_izvanredni,
      ...rest
    })));
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('predmeti', null, {});
  }
};
