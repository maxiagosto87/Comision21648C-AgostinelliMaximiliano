// Importar el módulo Express y el controlador de la página de inicio
const indexRouter = require("express").Router();
const { ctlrIndex } = require("../controllers/index.controller");

// Definir la ruta para la página de inicio y el controlador que se ejecutará
indexRouter.get("/", ctlrIndex.renderIndex);

// Exportar el enrutador para su uso en otras partes de la aplicación
module.exports = indexRouter;
