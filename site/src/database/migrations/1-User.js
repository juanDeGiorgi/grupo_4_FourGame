'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull: false
      },

      name: {
          type: Sequelize.STRING(255),
          allowNull: false,
      },

      email: {
          type: Sequelize.STRING(255),
          allowNull: false,
      },

      image: {
          type: Sequelize.STRING(255),
          allowNull: false,
          defaultValue: 'default-user-image.png',
      },

      password: {
          type: Sequelize.STRING(255),
          allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      deletedAt: {
          type: Sequelize.DATE,
          allowNull: true
      },

      loginDate: {
          type: Sequelize.DATE,
          allowNull: false,
      },

      delete: {
          type: Sequelize.INTEGER(1),
          allowNull: false,
          defaultValue: 0,
      },

      accessId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 1,
          references: {
            model: 'Access',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
