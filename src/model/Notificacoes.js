const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Clientes = require("./Clientes");

const Notificacoes = sequelize.define(
  "Notificacoes",
  {
    ID_Cliente: {
      type: DataTypes.INTEGER,
      references: {
        model: Clientes,
        key: "id",
      },
    },
    mensagem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_notificacao: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Notificacoes;
