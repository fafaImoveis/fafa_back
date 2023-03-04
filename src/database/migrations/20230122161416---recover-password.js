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
      newPass:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      expires:{
        type: Sequelize.DATE,
        allowNull: false,
      },
     
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('recover');
  }
};
