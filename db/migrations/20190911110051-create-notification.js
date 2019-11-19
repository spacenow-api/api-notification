'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notification', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: Sequelize.STRING,
      slug: Sequelize.STRING
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('notification');
  }
};