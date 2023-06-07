const Blog = require("../schemas/blogSchema");

exports.newPost = (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    res.status(400).json({ message: "Invalid post" });
    return
  }

  Blog.create({
    title, body
  })
  .then((data) => res.status(201).json(data))
  .catch(() => res.status(500).json({ message: "Could not create post" }));
};

exports.getAllPosts = (req, res) => {
    Blog.find()
    .then((data) => res.status(200).json(data))
    .catch(() =>
      res.status(500).json({ message: "Could not find posts" })
    );
}

