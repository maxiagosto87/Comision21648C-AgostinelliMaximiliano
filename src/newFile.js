// Importación de la variable "port" del módulo "database"
const { port } = require("./database/database");

// Importación de la aplicación Express desde el módulo "app"
const { app } = require("./app");

// Inicio del servidor Express
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
