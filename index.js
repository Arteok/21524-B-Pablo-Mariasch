const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("node:path");
const { sequelize } = require("./database");
const { PostModel } = require("./src/models/posts");
const app = express();

// para que funcione el body de los controllers
app.use(express.json());

// para poder mandar informacion desde un formulario de html
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(morgan("dev"));
app.set("views", __dirname + "/src" + "/views");
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// Ruta principal
app.get("/", async (req, res) => {
    const posts = await PostModel.findAll();
    res.render("index", {
        ruta: "./inicio",
        title: "Foro Random",
        listaDePosts: posts.reverse(),
    });
});

// Ruta para crear un nuevo post
app.get("/crear", async (req, res) => {
    res.render("index", {
        ruta: "./crear",
        title: "Foro Random",        
    });
});

/* app.get("/crear", async (req, res) => {
    res.render("crear");
}); */

// Ruta para elegir un post para editar
app.get("/editar", async (req, res) => {
    const posts = await PostModel.findAll();
    res.render("indexEditar", {
        title: "Foro Random",
        listaDePosts: posts.reverse(),
    });
});

// Ruta para editar un post existente
app.get("/editar/:id", async (req, res) => {
    const postId = req.params.id;
    const post = await PostModel.findByPk(postId);
    res.render("editar", { post });
});

// Ruta para elegir un post para eliminar
app.get("/eliminar", async (req, res) => {
    const posts = await PostModel.findAll();
    res.render("indexEliminar", {
        title: "Foro Random",
        listaDePosts: posts.reverse(),
    });
});

// Ruta para eliminar un existente
/* app.delete("/eliminar/:id", async (req, res) => {
    const postId = req.params.id;
    await PostModel.destroy({ where: { id: postId } });
    res.redirect("/"); 
}); */
app.delete("/eliminar/:id", async (req, res) => {
    const postId = req.params.id;    
    await PostModel.destroy({ where: { id: postId } });
    res.redirect("/"); 
}); 
 
// Rutas relacionadas a las posts (pueden estar definidas en "./src/routes/notes.routes")
app.use("/posts", require("./src/routes/posts.routes"));

// Iniciar el servidor en el puerto 4000
app.listen(4000, () => {
    sequelize
        .sync({ force: false })
        .then(() => console.log("La base de datos está conectada"))
        .catch((err) => console.log(err));
    console.log("Servidor en el puerto 4000");
});