// Importa las dependencias
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

// Carga las variables de entorno desde el archivo .env
dotenv.config({ path: "./.env" });

// Obtiene las variables de entorno necesarias
const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbpass = process.env.DB_PASSWORD;
const dbhost = process.env.DB_HOST;
const port = process.env.PORT;

// Crea una instancia de Sequelize para conectarse a la base de datos
const sequelize = new Sequelize(dbname, dbuser, dbpass, {
  host: dbhost,
  dialect: "mysql",
});

// Función asincrónica para probar la conexión a la base de datos
async function TestConnection() {
  try {
    // Intenta autenticarse con la base de datos
    await sequelize.authenticate();

    // Sincroniza el modelo con la base de datos (alter: false para no modificar la estructura de la base de datos)
    await sequelize.sync({ alter: false });

    // Muestra un mensaje si la conexión se estableció con éxito
    console.log("Conexión a la base de datos establecida.");
  } catch (error) {
    // Muestra un mensaje de error si no se pudo conectar a la base de datos
    console.error("No se pudo conectar Error:", error);
  }
}

// Exporta la función de prueba de conexión, el puerto y la instancia de Sequelize para su uso en otros archivos
module.exports = { TestConnection, port, sequelize };