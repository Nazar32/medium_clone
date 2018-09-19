const mongoose = require('mongoose');
const User = require('./user.model');
const StorySection = require('./storySection.model');

const StorySchema = new mongoose.Schema({
  title: {
    type: String
  },
  author: {
    type: User,
    required: true
  },
  sections: {
    type: [StorySection]
  }
});

module.exports = mongoose.model('Story', StorySchema);