'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('productimages', { 
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

      productId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Products',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('productimages');
  }
};
