const { PostModel } = require("../models/posts");

//get
const listPosts = async (req, res) => {
    const allPosts = await PostModel.findAll();

    res.json(allPosts);
};

//post
const createPost = async (req, res) => {  
    
    
    const { titulo, contenido, linkImg } = req.body;

    await PostModel.create({ titulo, contenido, linkImg });

    res.redirect("/");
};

//post
const updatePost = async (req, res) => {
    const postId = req.params.id;
    const { titulo, contenido, linkImg } = req.body;

    const post = await PostModel.findByPk(postId);

    await post.update({ titulo, contenido, linkImg });

    res.redirect("/");
};

module.exports = { createPost, listPosts, updatePost };