const moongose = require('mongoose');
const { Schema } = moongose;

const postSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  post: String,
  date: Date
});

moongose.model('posts', postSchema);
