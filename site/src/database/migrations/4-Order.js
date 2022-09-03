'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull: false
      },

      finalPrice: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
      },

      status: {
          type: Sequelize.INTEGER(1),
          allowNull: false,
          defaultValue: 0
      },

      cardQuantity: {
          type: Sequelize.INTEGER(1),
          allowNull: false,
          defaultValue: 1
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
    await queryInterface.dropTable('orders');
  }
};
