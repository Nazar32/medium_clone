const mongoose = require('mongoose');

const StoryItemSchema = new mongoose.Schema({
  variant: {
    type: Number
  },
  content: {
    type: String
  }
});

const StoryItem = mongoose.model('StoryItem', StoryItemSchema);
module.exports = StoryItem;
