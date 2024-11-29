const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Clientes = require("./Clientes");

const Contas = sequelize.define(
  "Contas",
  {
    ID_Cliente: {
      type: DataTypes.INTEGER,
      references: {
        model: Clientes,
        key: 'id',
      },
      allowNull: false,
    },
    Saldo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Contas;
