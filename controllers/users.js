const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = mongoose.model('users');

exports.getUsers = async (request, response) => {
  const res = await User.find();
  response.send(res);
};

exports.registerUser = async (request, response) => {
  const { fullName, email, password, githubLink } = request.body;
  const { path } = request.file;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    fullName,
    email,
    password: hashedPassword,
    githubLink,
    picture: path
  });

  try {
    await user.save();
    response.send(user);
  } catch (err) {
    throw err;
  }
};
