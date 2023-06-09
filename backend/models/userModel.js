const User = require("../schemas/userSchema");
const Blog = require("../schemas/blogSchema");

const secretKey = process.env.SECRET_KEY;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 7);
  const user = new User({ email, password: hashedPassword });

  user
    .save()
    .then(() => {
      const token = jwt.sign(
        {
          email: user.email,
          userId: user._id,
        },
        secretKey
      );
      res.status(201).json({ message: "User created", token });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ message: "Could not create user" });
    });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }).then((data) => {
    if (!data || !bcrypt.compareSync(password, data.password)) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ email: data.email, userId: data._id }, secretKey);
    res.json({ message: "User logged in", token });
  });
};

exports.getAllUsers = (req, res) => {
  User.find()
    .then((data) => res.status(200).json(data))
    .catch(() => {
      res.status(404).json({ message: "Could not retrieve users" });
    });
};

exports.getUserByEmail = (req,res) => {
  const {email} = req.body

  User.findOne({email: email})
  .then((data) => res.status(200).json(data))
    .catch(() => {
      res.status(404).json({ message: "Could not retreive user" }); 
    });
}

exports.getUsersPosts = (req, res) => {
   const userId = req.params.id;

  Blog.find({ user: userId})
    .populate("user")
    .then((data) => res.status(200).json(data))
    .catch(() => {
      res.status(404).json({ message: "Could not find users posts" });
    });
};
