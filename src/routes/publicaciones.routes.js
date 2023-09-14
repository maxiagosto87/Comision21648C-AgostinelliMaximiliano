// Importar el módulo Express y el controlador de publicaciones
const publicacionRoutes = require("express").Router();
const { controllerPublicacion } = require("../controllers/publicacion.controller");

// Ruta para mostrar el formulario de creación de una nueva publicación
publicacionRoutes.get("/publicaciones/", controllerPublicacion.showForm);

// Ruta para mostrar todas las publicaciones
publicacionRoutes.get("/publicaciones/views", controllerPublicacion.showPublications);

// Ruta para procesar el formulario y crear una nueva publicación
publicacionRoutes.post("/publicaciones/", controllerPublicacion.create);

// Ruta para mostrar el formulario de edición de una publicación por su ID
publicacionRoutes.get("/editar/:id", controllerPublicacion.mostrarFormularioEdicion);

// Ruta para procesar la edición de una publicación por su ID
publicacionRoutes.post("/editar/:id", controllerPublicacion.editarPublicacion);

// Ruta para borrar una publicación por su ID
publicacionRoutes.get("/borrar/:id", controllerPublicacion.deletePublicacion);

// Exportar el enrutador para su uso en otras partes de la aplicación
module.exports = publicacionRoutes;