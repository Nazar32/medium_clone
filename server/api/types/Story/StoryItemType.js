const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = graphql;

const StoryItemType = new GraphQLObjectType({
  name: 'StoryItem',
  fields: {
    variant: new GraphQLNonNull(GraphQLString),
    content: GraphQLString
  }
});

module.exports = StoryItemType;
