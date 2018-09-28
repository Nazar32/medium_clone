const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = graphql;
const StorySectionType = require('./StorySectionType');

const StoryType = new GraphQLObjectType({
  name: 'Story',
  fields: () => {
    const { AuthorType } = require('../User');

    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: GraphQLString },
      brief: { type: GraphQLString },
      author: { type: new GraphQLNonNull(AuthorType) },
      sections: { type: new GraphQLList(StorySectionType) }
    };
  }
});

module.exports = StoryType;
