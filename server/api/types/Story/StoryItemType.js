const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} = graphql;
const StoryItemVariant = require('./StoryItemVariant');

const StoryItemType = new GraphQLObjectType({
  name: 'StoryItem',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    variant: { type: new GraphQLNonNull(StoryItemVariant) },
    content: { type: GraphQLString }
  }
});

module.exports = StoryItemType;
