const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const connection = require('../index');

const Recover_model = connection.define('Recover', {
    newPass:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    expires:{
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Recover_model;