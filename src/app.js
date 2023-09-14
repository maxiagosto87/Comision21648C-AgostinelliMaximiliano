// Importación de módulos y configuración inicial
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const { TestConnection, port } = require("./database/database");
const indexRouter = require("./routes/index.routes");
const publicacionesRouter = require("./routes/publicaciones.routes");

// Creación de la aplicación Express
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// Establecimiento de la ruta para archivos estáticos (CSS y JS públicos)
app.use(express.static(path.join(__dirname, "public")));

// Configuración del motor de vistas EJS
app.set("view engine", "ejs");

// Establecimiento de la carpeta "views" para las vistas dinámicas
app.set("views", path.join(__dirname, "views"));

// Función para probar la conexión a la base de datos
TestConnection();

// Uso de las rutas definidas en los archivos de enrutamiento
app.use(indexRouter);
app.use(publicacionesRouter);

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});