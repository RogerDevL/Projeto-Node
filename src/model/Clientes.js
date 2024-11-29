const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Clientes = sequelize.define(
  "Clientes",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Clientes;
