const { DataTypes } = require('sequelize');
const connection = require('../index');

const Categories_model = connection.define('Categories', {
    modo_pagamento:{
        type: DataTypes.STRING,
        allonull: false,
    },
    tipo_de_imovel:{
        type: DataTypes.STRING,
        allonull: false,
    },
    cidade:{
        type: DataTypes.STRING,
        allonull: false,
    },
});

module.exports = Categories_model;