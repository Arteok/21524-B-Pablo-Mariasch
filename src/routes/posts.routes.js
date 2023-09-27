const { Router } = require("express");
const {
    listPosts,
    createPost,
    updatePost,
} = require("../controllers/posts.controllers");

const router = Router();

router.get("/", listPosts);
router.post("/", createPost);
router.post("/:id", updatePost);

module.exports = router;