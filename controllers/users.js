const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = mongoose.model('users');

const keys = require('../config/keys');

exports.getUsers = async (request, response) => {
  const res = await User.find();
  response.send(res);
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
    response.send({ message: 'User saved' });
  } catch (err) {
    throw err;
  }
};

exports.loginUser = async (request, response) => {
  const { email, reqPassword } = request.body;
  console.log(request.body);
  try {
    const res = await User.find({ email });
    if (res.length >= 1) {
      const { _id, password } = res[0];
      const match = await bcrypt.compare(reqPassword, password);
      if (match) {
        const payload = {
          _id,
          email
        };
        const token = jwt.sign(payload, keys.jwtSecret);
        response.send({ _id, token });
      } else {
        response.status(401).send({ message: 'Wrong password.' });
      }
    } else {
      response.status(401).send({ message: 'User does not exist.' });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.authTest = (request, response) => {
  response.send({ message: 'Auth successful' });
};
