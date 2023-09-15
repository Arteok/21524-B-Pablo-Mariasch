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

Este proyecto permite a los usuarios interactuar con publicaciones en un foro en línea, realizando operaciones como ver, crear, editar y eliminar publicaciones. Está organizado en una estructura clara de archivos y utiliza tecnologías como Node.js, Express y Sequelize para lograr su funcionalidad.