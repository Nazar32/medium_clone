const mongoose = require('mongoose');
const { Schema } = mongoose;
const StorySection = require('./storySection.model');

const StorySchema = new mongoose.Schema({
  title: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  sections: [StorySection.schema],
  isPublished: {
    type: Boolean,
    default: false,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date,
    required: true
  }
});

module.exports = mongoose.model('Story', StorySchema);