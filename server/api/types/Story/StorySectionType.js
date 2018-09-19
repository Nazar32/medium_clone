const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = graphql;
const StoryItemType = require('./StoryItemType');

const StorySectionType = new GraphQLObjectType({
  name: 'StorySection',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    items: {
      type: new GraphQLList(StoryItemType)
    }
  }
});

module.exports = StorySectionType;
