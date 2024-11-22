const [DataTypes] = require ('sequelize');
const sequelize = require('../config/database');
const Contas = require('./Contas');

const Transacoes = sequelize.define('Transacoes', {
    ID_Conta:{
        type:DataTypes.STRING,
        references:{
            Model:Contas,
            key:'id'
        }
    },
    Tipo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Tipo_Transacao:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Valor:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Data_Transacao:{
        type:DataTypes.DATE,
        allowNull:false
    }
},{
    timestamps: true
});

module.exports = Transacoes;