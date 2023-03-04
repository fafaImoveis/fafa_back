'use strict';

const { STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('imovel', 
    { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      titulo:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      modo_pagamento:{
        type: Sequelize.STRING,
        allowNull: false,
      },


      quartos:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      banheiros:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tamanho:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      vagas:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobilia:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      preco:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      
      descricao:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobre:{
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('imovel');
  }
};
