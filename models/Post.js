const moongose = require('mongoose');
const { Schema } = moongose;
const LikeSchema = require('./Like');

const postSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  post: String,
  date: Date,
  likes: [LikeSchema]
});

moongose.model('posts', postSchema);
