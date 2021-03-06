const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  text: { type: String },
  author: { id: { type: String } },
});

module.exports = mongoose.model('Comment', commentSchema);
