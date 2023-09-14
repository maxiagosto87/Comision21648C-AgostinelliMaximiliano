# Foro Node.js:

Este proyecto es un foro web desarrollado con Node.js, Express y MySQL2 que te permite crear, ver, editar y eliminar publicaciones en un foro en línea.

## Requisitos previos:

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión recomendada)
- [npm](https://www.npmjs.com/) (gestor de paquetes de Node.js)
- [MySQL](https://www.mysql.com/) (base de datos)

Navega hasta el directorio del proyecto:
cd mi-proyecto-nodejs

Instala las dependencias del proyecto:
npm install
npm install express
npm install dotenv
npm install ejs
npm install mysql2
npm install sequelize
npm install morgan
npm install cors

Dentro del raiz del proyecto el archivo package.json tendría que tener un formato similar al siguiente:

"dependencies": {
  "dotenv": "^version",
  "express": "^version",
  "ejs": "^version",
  "mysql2": "^version",
  "sequelize": "^version",
  "morgan": "^version",
  "cors": "^version"
}

Archivo .env, tiene que ser confgurado para poder conectarte a la Base de Datos.

# Cambia "localhost" a la dirección de tu servidor MySQL si es necesario
DB_HOST= localhost     
DB_USER= tu_usuario_de_mysql
DB_PASSWORD= tu_contraseña_de_mysql
DB_NAME= nombre_de_tu_base_de_datos

# Puerto en el que se ejecutará la aplicación
PORT= 4000

### Comandos Útiles:

- `npm run dev`: Inicia el servidor en modo de desarrollo utilizando nodemon, lo que permite reiniciar automáticamente la aplicación cuando se realizan cambios en el código fuente.

#### Estructura del Proyecto:

- `/public`: Carpeta que contiene archivos estáticos como CSS, imágenes, etc.
- `/views`: Carpeta que contiene las plantillas EJS para las vistas.
- `/routes`: Carpeta que contiene las rutas y controladores.
- `/models`: Carpeta que contiene los modelos de la base de datos.
- `/config`: Carpeta que contiene la configuración de la base de datos y otros ajustes.

##### Accede a la aplicación en tu navegador:

Abre un navegador web y visita http://localhost:4000 (o el puerto que hayas configurado en tu archivo .env) para acceder a la aplicación.

#### Crear una Nueva Publicación:

1. Accede a la página "Crear Publicación".
2. Completa el formulario con tu nombre, email, contenido y, opcionalmente, un enlace.
3. Haz clic en el botón "Crear Publicación" para agregar tu publicación al foro.

#### Editar una Publicación Existente:

1. Accede a la página de la publicación que deseas editar.
2. Haz clic en el botón "Editar" en la publicación.
3. Realiza las modificaciones necesarias en el formulario de edición.
4. Haz clic en el botón "Guardar Cambios" para actualizar la publicación.