const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} = graphql;
const StoryItemType = require('./StoryItemType');

const StorySectionType = new GraphQLObjectType({
  name: 'StorySection',
  fields: {
    id: { 
      type: new GraphQLNonNull(GraphQLID) 
    },
    items: {
      type: new GraphQLList(StoryItemType)
    }
  }
});

module.exports = StorySectionType;
