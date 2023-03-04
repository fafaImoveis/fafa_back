'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('images', 
    { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      url:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      imovel_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'imovel', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      size:{
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('images');
  }
};
