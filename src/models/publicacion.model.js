// Importa las dependencias
const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

// Define el modelo de la entidad "Publicacion"
const Publicacion = sequelize.define(
  "publication",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING, // Almacena el nombre del archivo de la imagen
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATEONLY, // Almacena la fecha de creación
      allowNull: true,
    },
  },
  {
    timestamps: true, // Agrega timestamps (createdAt, updatedAt)
  }
);

// Exporta el modelo "Publicacion" para su uso en otros archivos
module.exports = Publicacion;