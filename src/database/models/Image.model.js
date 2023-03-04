const { DataTypes } = require('sequelize');
const connection = require('../index');

const Images_model = connection.define('Images', {
    url:{
        type: DataTypes.STRING,
        allownull: false,
    },
    filename:{
        type: DataTypes.STRING,
        allownull: false,
    },
    size:{
        type: DataTypes.STRING,
        allownull: false,
    },
});

module.exports = Images_model;