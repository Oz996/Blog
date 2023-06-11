const router = require("express").Router();
const userModel = require("../models/userModel");

router.post("/register", userModel.registerUser);

router.post("/login", userModel.loginUser)

router.get('/posts/:id', userModel.getUsersPosts)

router.get("/", userModel.getUserByEmail)

router.get("/users", userModel.getAllUsers)


module.exports = router;
