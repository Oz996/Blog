const router = require("express").Router();
const userModel = require("../models/userModel");

router.post("/register", userModel.registerUser);

router.post("/login", userModel.loginUser)

router.get('/posts/:id', userModel.getUsersPosts)

router.get("/:id", userModel.getUserById)

router.get("/", userModel.getAllUsers)


module.exports = router;
