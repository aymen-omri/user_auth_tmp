let mysql = require('mysql2');

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('tmpp', 'root', '1234567', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize; 