const {DataTypes} = require ('sequelize');
const sequelize = require('../config/database');

const Admin = sequelize.define('Admin',{
    Nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    idade:{
        type:DataTypes.STRING,
        allowNull:false
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timesstamps: true 
});

module.exports = Admin