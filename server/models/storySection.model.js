const mongoose = require('mongoose');
const StoryItem = require('./StoryItem.model');

const StorySectionSchema = new mongoose.Schema({
  items: [StoryItem.schema]
});

const StorySection = mongoose.model('StorySection', StorySectionSchema);
module.exports = StorySection;
