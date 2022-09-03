'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('address', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull: false
      },

      street: {
          type: Sequelize.STRING(255),
          allowNull: false,
      },

      number: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },

      postalCode: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },

      neighborhood: {
          type: Sequelize.STRING(255),
          allowNull: false
      },

      note: {
          type: Sequelize.STRING(500),
          allowNull: true
      },

      state: {
          type: Sequelize.STRING,
          allowNull: false,
      },

      userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('address');
  }
};
