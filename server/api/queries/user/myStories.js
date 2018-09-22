const StoryModel = require('../../../models/story.model');

const myStoriesQueryResolver = async ({ id }) => {
  const stories = await StoryModel.find({ author: id }).exec();

  return stories;
};

module.exports = myStoriesQueryResolver;
