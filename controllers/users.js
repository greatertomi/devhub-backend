const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = mongoose.model('users');

exports.getUsers = (request, response) => {
  response.send({ message: 'Users route hot and ready' });
};

exports.registerUser = async (request, response) => {
  const { fullName, email, password, githubLink } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    fullName,
    email,
    password: hashedPassword,
    githubLink
  });

  try {
    await user.save();
    response.send(user);
  } catch (err) {
    throw err;
  }
};
