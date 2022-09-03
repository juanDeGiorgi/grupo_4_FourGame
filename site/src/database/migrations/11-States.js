'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('states', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull: false
      },

      name: {
          type:Sequelize.STRING(255),
          allowNull: false,
      },

      countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('states');
  }
};
