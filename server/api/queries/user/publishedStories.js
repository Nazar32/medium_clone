const StoryModel = require('../../../models/story.model');

const publishedStoriesQueryResolver = async ({ id }) => {
  const storiesQuery = {
    author: id,
    isPublished: true
  };

  const stories = await StoryModel.find(storiesQuery).exec();
  return stories;
};

module.exports = publishedStoriesQueryResolver;
