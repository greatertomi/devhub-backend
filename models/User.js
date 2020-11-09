const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  fullName: String,
  email: String,
  password: String,
  githubLink: String
});

// mongoose.model('users', userSchema);
mongoose.model('users', userSchema);
