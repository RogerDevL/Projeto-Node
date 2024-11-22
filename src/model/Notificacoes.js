const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');
const Clientes = require('./Clientes');


const Notificacoes = sequelize.define('Notificacoes',{
    ID_Cliente:{
        type:DataTypes.INTEGER,
        references:{
            Model: Clientes,
            key:'id'
        }
    },
    Mensagem:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Data_notificacao:{
        type:DataTypes.DATE
    }
},{
    timestamps: true
});

module.exports = Notificacoes;