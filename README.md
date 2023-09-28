# 21524-B-Pablo-Mariasch

Descripción del Proyecto: Foro en línea construido con Node.js y Express como servidor backend, utilizando Sequelize como ORM para la base de datos.

Funcionalidades:

Listar todas las publicaciones: Los usuarios pueden ver todas las publicaciones existentes en el foro.
Crear una nueva publicación: Los usuarios pueden crear nuevas publicaciones proporcionando un título, contenido y una URL de imagen opcional.
Editar una publicación: Los usuarios pueden editar el título, contenido y URL de imagen de una publicación existente.
Eliminar una publicación: Los usuarios pueden eliminar una publicación existente del foro.

Estructura del Proyecto:
index.js: Archivo principal del servidor que configura las rutas y inicia la aplicación.
src/models/posts.js: Modelo de Sequelize para la tabla de publicaciones en la base de datos.
src/routes/posts.routes.js: Define las rutas relacionadas con las publicaciones, incluyendo la creación, edición y eliminación.
src/controllers/posts.controllers.js: Contiene controladores que gestionan la lógica de negocio para las operaciones de las publicaciones.
views/: Carpeta con plantillas EJS para las vistas HTML.
public/: Carpeta para archivos estáticos como CSS o imágenes.

.env  debe configurarse con los siguientes datos (se deja como ejemplo un .env.example) 
-  DB_NAME : Es el nombre de la base de datos. 
-  DB_USER : Es el nombre de usuario para acceder a la base de datos. 
-  DB_PASSWORD : Es la contraseña para acceder a la base de datos. 
-  DB_HOST : Es la dirección del servidor de la base de datos. 
-  DB_DIALECT : Es el tipo de base de datos que se está utilizando.  

- Base de datos: Para utilizar la aplicación, debes crear una base de datos y especificar su nombre en el archivo  .env  en la variable  DB_NAME . Asegúrate de que la base de datos exista y tenga los permisos adecuados antes de ejecutar la aplicación. 
 
- Puerto de acceso: La aplicación se ejecutará en el puerto 4000. Puedes acceder a la aplicación abriendo tu navegador web y visitando  http://localhost:4000. Asegúrate de que el puerto 4000 esté disponible y no esté siendo utilizado por otra aplicación en tu sistema.

