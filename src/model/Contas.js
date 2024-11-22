const {DataTypes, Model} = require('sequelize')
const sequelize = require('../config/database')
const Clientes = require('./Clientes')

const Contas = sequelize.define('Contas', {
    ID_Cliente:{
        type:DataTypes.INTEGER,
        references:{
            Model: Clientes,
            key:'id'
        }
    },
    Saldo:{
        type:DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true
});

module.exports = Contas
