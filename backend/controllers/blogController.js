const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const blogModel = require("../models/blogModel");

router.post("/", authMiddleware, blogModel.newPost);

router.get("/", blogModel.getAllPosts);

module.exports = router;
