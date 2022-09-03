'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', { 
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

      price: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
      },

      discount: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
      },

      description: {
          type: Sequelize.STRING(500),
          allowNull: false,
      },

      deletedAt: {
          type:Sequelize.DATE,
          allowNull: true
      },

      delete: {
          type: Sequelize.INTEGER(1),
          allowNull: false,
          defaultValue: 0,
      },

      categoryId: {
          type : Sequelize.INTEGER,
          allowNull:false,
          references: {
            model: 'Categories',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },

      userId: {
          type : Sequelize.INTEGER,
          allowNull:false,
          references: {
            model: 'Users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },

      typeProductId: {
          type : Sequelize.INTEGER,
          allowNull:false,
          references: {
            model: 'TypeProducts',
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
    await queryInterface.dropTable('products');
  }
};
