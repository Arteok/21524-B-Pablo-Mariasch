const { Router } = require("express");
const {
    listPosts,
    createPost,
    updatePost,
    deletePost
} = require("../controllers/posts.controllers");

const router = Router();

router.get("/", listPosts);
router.post("/", createPost);
router.post("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;