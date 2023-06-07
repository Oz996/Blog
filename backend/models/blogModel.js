const Blog = require("../schemas/blogSchema");

exports.newPost = (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    res.status(400).json({ message: "Invalid post" });
    return;
  }

  const userId = req.user.userId;
  console.log("User ID:", userId);

  Blog.create({
    title,
    body,
    user: userId,
  })
    .then((data) => res.status(201).json(data))
    .catch((error) => {
      console.log("Error:", error.message);
      res.status(500).json({ message: "Could not create post" });
    });
};

exports.getAllPosts = (req, res) => {
  Blog.find()
    .populate("user")
    .then((data) => res.status(200).json(data))
    .catch(() => {
      res.status(404).json({ message: "Could retrieve posts" });
    });
};

exports.getPostById = (req, res) => {
  const postId = req.params.id;

  Blog.findById(postId)
    .populate("user")
    .then((data) => res.status(200).json(data))
    .catch(() => {
      restart.status(404).json({ message: "Could not retreive post" });
    });
};
