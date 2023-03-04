const { DataTypes } = require('sequelize');
const connection = require('../index');
const Image_model = require('./Image.model');

const Imovel_model = connection.define('Imovel', {
    titulo:{
        type: DataTypes.STRING,
        allownull: false,
    },
    cidade:{
        type: DataTypes.STRING,
        allownull: false,
    },
    tipo:{
        type: DataTypes.STRING,
        allownull: false,
    },
    modo_pagamento:{
        type: DataTypes.STRING,
        allownull: false,
    },
    preco:{
        type: DataTypes.STRING,
        allownull: false,
    },

    quartos:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      banheiros:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tamanho:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      vagas:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mobilia:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

    descricao:{
        type: DataTypes.STRING,
        allownull: false,
    },
    sobre:{
        type: DataTypes.STRING,
        allownull: false,
    },
},{
    freezeTableName: true,
});

Image_model.belongsTo(Imovel_model, { foreignKey: 'imovel_id', as: 'Imovel' });
Imovel_model.hasMany(Image_model, { foreignKey: 'imovel_id', as: 'Images' });

module.exports = Imovel_model;