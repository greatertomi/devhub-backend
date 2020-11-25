const mongoose = require('mongoose');

const Post = mongoose.model('posts');

exports.getAllPosts = async (request, response) => {
  const res = await Post.find();
  response.send(res);
};

exports.createPost = async (request, response) => {
  const { userId, post } = request.body;
  console.log(request.body);

  const newPost = new Post({
    _user: userId,
    post
  });

  /* try {
    await newPost.save();
    response.send({ message: 'Post Saved' });
  } catch (err) {
    console.log(err);
  } */
};
