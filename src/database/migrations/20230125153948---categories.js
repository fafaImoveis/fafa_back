'use strict';

const { STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recover', 
    { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      modo_pagamento:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_de_imovel:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      cidade:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('recover');
  }
};
