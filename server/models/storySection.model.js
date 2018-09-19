const mongoose = require('mongoose');

const StorySectionSchema = new mongoose.Schema({
  items: [{
    variant: {
      type: String
    },
    content: {
      type: String
    }
  }]
});

module.exports = mongoose.model('StorySection', StorySectionSchema);