const mongoose = require('mongoose');

const StorySectionSchema = new mongoose.Schema({
  items: [{
    variant: {
      type: Number
    },
    content: {
      type: String
    }
  }]
});

const StorySection = mongoose.model('StorySection', StorySectionSchema);
module.exports = StorySection;
