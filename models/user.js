const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/dbConfig');

const _User = sequelize.define('_User', {   
    user_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT("long"),
        allowNull: false
    }
},
    {
        freezeTableName: true,
        timestamps : false
    }
);

module.exports = _User; 
