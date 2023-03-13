require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('../routes');

require('./database');

const app = express();


app.use(express.json());
app.use(cors());
app.use(routes);
app.use(morgan('dev'));

module.exports = app;
