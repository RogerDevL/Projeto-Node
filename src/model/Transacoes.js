const {DataTypes} = require ('sequelize');
const sequelize = require('../config/database');
const Contas = require('./Contas');

const Transacoes = sequelize.define('Transacoes', {
    ID_Conta:{
        type:DataTypes.INTEGER,
        references:{
            Model:Contas,
            key:'id'
        }
    },
    tipo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    tipo_Transacao:{
        type:DataTypes.STRING,
        allowNull:false
    },
    valor:{
        type:DataTypes.STRING,
        allowNull:false
    },
    data_Transacao:{
        type:DataTypes.DATE,
        allowNull:false
    }
},{
    timestamps: true
});

module.exports = Transacoes;