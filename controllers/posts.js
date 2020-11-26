const mongoose = require('mongoose');

const Post = mongoose.model('posts');
const User = mongoose.model('users');

exports.getAllPosts = async (request, response) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    const adjustedPosts = [];
    for (const post of posts) {
      const user = await User.findById(post._user);
      const newPost = {
        _id: post._id,
        _user: post._user,
        post: post.post,
        date: post.date,
        creatorName: user.fullName
      };
      adjustedPosts.push(newPost);
    }
    response.send(adjustedPosts);
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
    const res = await Post.find().sort({ date: -1 });
    response.send(res);
  } catch (err) {
    console.log(err);
  }
};

exports.deletePost = async (request, response) => {
  const { postId } = request.params;

  try {
    await Post.findByIdAndDelete(postId);
    const res = await Post.find().sort({ date: -1 });
    response.send(res);
  } catch (err) {
    console.log(err);
  }
};

exports.likePost = async (request, response) => {
  const { postId, userId } = request.body;
  console.log(request.body);

  try {
    // TODO Implement liking post
    await Post.findById(postId).update({ likes: userId }).exec();
    response.send({ message: 'Post Updated' });
  } catch (err) {
    console.log(err);
  }
};
