const mongoose = require('mongoose');

const Post = mongoose.model('posts');

exports.getAllPosts = async (request, response) => {
  try {
    const res = await Post.find();
    response.send(res);
  } catch (err) {
    console.log(err);
  }
};

exports.getUserPosts = async (request, response) => {
  const { userId } = request.params;
  try {
    const res = await Post.find({ _user: userId }).sort({ date: -1 });
    response.send(res);
  } catch (err) {
    console.log(err);
  }
};

exports.createPost = async (request, response) => {
  const { userId, post } = request.body;
  console.log(request.body);

  const newPost = new Post({
    _user: userId,
    post,
    date: Date.now()
  });

  try {
    await newPost.save();
    const res = await Post.find({ _user: userId }).sort({ date: -1 });
    response.send(res);
  } catch (err) {
    console.log(err);
  }
};

exports.deletePost = async (request, response) => {
  const { postId } = request.params;

  try {
    await Post.findByIdAndDelete(postId);
    response.send({ message: 'Post deleted' });
  } catch (err) {
    console.log(err);
  }
};
