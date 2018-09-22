const StoryModel = require('../../../models/story.model');

const rootAllStoriesQueryResolver = async () => {
  const stories = await StoryModel.find({
    isPublished: true
  }).populate('author').exec();

  return stories;
};

module.exports = rootAllStoriesQueryResolver;