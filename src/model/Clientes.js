const {DataTypes} = require('sequelize');
const sequelize = require ('../config/database');


const Clientes = sequelize.define('Clientes', {
    Nome_Cliente:{
        type:DataTypes.STRING,
        allowNull: false
    },
    Email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    }
},{
    timestamps: true
});

module.exports = Clientes;