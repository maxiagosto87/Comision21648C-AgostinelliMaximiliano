// Importa el modelo de Publicacion
const Publicacion = require("../models/publicacion.model");
const controllerPublicacion = {};

// Función para mostrar el formulario de creación de publicación
controllerPublicacion.showForm = (req, res) => {
  console.log("Controlador showForm llamado");
  res.render("crearFormulario", { title: "Crear Publicación" });
};

// Función para mostrar todas las publicaciones
controllerPublicacion.showPublications = async (req, res) => {
  try {
    const publicaciones = await Publicacion.findAll();
    // Formateo de fechas para las publicaciones
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    publicaciones.map(e => {
      e.dataValues.createdAt = new Date(e.dataValues.createdAt).toLocaleDateString('es-AR', options);
    });
    res.render("publicaciones", { titleUser: "Publicaciones", results: publicaciones });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las publicaciones");
  }
};

// Función para crear una nueva publicación
controllerPublicacion.create = async (req, res) => {
  try {
    console.log(req);
    const { nombre, email, contenido, link } = req.body;

    // Crea una nueva publicación en la base de datos
    const nuevaPublicacion = await Publicacion.create({
      nombre,
      email,
      contenido,
      link
    });

    res.redirect("/"); // Redirige a la página principal
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear la publicación");
  }
};

// Función para borrar una publicación
controllerPublicacion.deletePublicacion = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteResult = await Publicacion.destroy({ where: { id: id } });

    // Verifica si se borró alguna publicación (deleteResult contiene el número de filas eliminadas)
    if (deleteResult > 0) {
      return res.redirect("/publicaciones/views");
    } else {
      // Si deleteResult es 0, significa que no se encontró la publicación con ese ID
      return res.status(404).send("La publicación no se encontró");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al borrar la publicación");
  }
};

// Función para mostrar el formulario de edición de una publicación por su ID
controllerPublicacion.mostrarFormularioEdicion = async (req, res) => {
  try {
    const id = req.params.id;
    const publicacion = await Publicacion.findByPk(id);
    res.render("editarFormulario", { title: "Editar Publicación", publicacion });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al cargar la publicación para editar");
  }
};

// Función para procesar la edición de una publicación por su ID
controllerPublicacion.editarPublicacion = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, email, contenido, link } = req.body;

    // Encuentra la publicación por su ID y actualiza sus campos
    const publicacion = await Publicacion.findByPk(id);
    if (!publicacion) {
      return res.status(404).send("La publicación no se encontró");
    }

    publicacion.nombre = nombre;
    publicacion.email = email;
    publicacion.contenido = contenido;
    publicacion.link = link;

    await publicacion.save(); // Guarda los cambios en la base de datos

    res.redirect("/"); // Redirige a la página principal
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al editar la publicación");
  }
};

// Exporta el controlador para que pueda ser utilizado en otras partes de la aplicación
module.exports = { controllerPublicacion };
