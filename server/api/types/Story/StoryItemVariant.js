const { GraphQLEnumType } = require('graphql');

const StoryItemVariant = new GraphQLEnumType({
  name: 'StoryItemVariant',
  values: {
    TEXT: {
      value: 1
    }
  }
});

module.exports = StoryItemVariant;
