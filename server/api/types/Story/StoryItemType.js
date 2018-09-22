const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = graphql;
const StoryItemVariant = require('./StoryItemVariant');

const StoryItemType = new GraphQLObjectType({
  name: 'StoryItem',
  fields: {
    variant: { type: new GraphQLNonNull(StoryItemVariant) },
    content: { type: GraphQLString }
  }
});

module.exports = StoryItemType;
