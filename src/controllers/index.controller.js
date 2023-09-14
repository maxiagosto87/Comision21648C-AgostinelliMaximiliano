// Controlador de la página de inicio
const ctlrIndex = {};

// Función para renderizar la página de inicio
ctlrIndex.renderIndex = (req, res) => {
// Renderiza la vista "index" y pasa el título como "Pag Inicio"
  res.render("index", { title: "Pag Inicio" });
};

// Exporta el controlador para que pueda ser utilizado en otras partes de la aplicación
module.exports = { ctlrIndex };
