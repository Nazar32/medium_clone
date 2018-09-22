const graphql = require('graphql');
const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull
} = graphql;
const UserInterface = require('./UserInterface');
const UserQueries = require('../../queries/user');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  interfaces: [
    UserInterface
  ],
  fields: () => {
    const { StoryType } = require('../Story');

    return {
      id: { type: GraphQLID },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      stories: {
        type: new GraphQLNonNull(new GraphQLList(StoryType)),
        resolve: UserQueries.Author.publishedStories
      }
    };
  }
});

module.exports = AuthorType;
