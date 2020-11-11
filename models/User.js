const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  fullName: String,
  email: String,
  password: { type: String, select: false },
  githubLink: String,
  picture: String
});

// mongoose.model('users', userSchema);
mongoose.model('users', userSchema);
