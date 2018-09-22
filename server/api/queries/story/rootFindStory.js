const StoryModel = require('../../../models/story.model');

const rootFindStoryQueryResolver = async (_, { input: { id } }) => {
  const query = {
    isPublished: 1,
    _id: id
  };

  return await StoryModel.findOne(query).populate('author').exec();
};

module.exports = rootFindStoryQueryResolver;