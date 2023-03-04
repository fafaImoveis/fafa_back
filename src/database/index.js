const Sequelize = require('sequelize');
const { connect } = require('../app');
const db_config = require('../configs/database.config');

const connection = new Sequelize(db_config);

try {
    const connect = async () =>{
        await connection.authenticate();
        console.log('----- 🛸 Database connected 🛸 -----');
    }
    connect();
} catch (error) {
    console.log('Error Database: ', error)
};

module.exports = connection;