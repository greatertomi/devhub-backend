const moongose = require('mongoose');
const { Schema } = moongose;

const likeSchema = new Schema({
  userId: { type: Schema.Types, ref: 'User' },
  date: Date
});

module.exports = likeSchema;
