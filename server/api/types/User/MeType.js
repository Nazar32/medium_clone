const graphql = require('graphql');
const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull
} = graphql;
const UserInterface = require('./UserInterface');
const { StoryType } = require('../Story');
const UserQueries = require('../../queries/user');

const MeType = new GraphQLObjectType({
  name: 'Me',
  interfaces: [
    UserInterface
  ],
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    stories: {
      type: new GraphQLNonNull(new GraphQLList(StoryType)),
      resolve: UserQueries.Me.myStories
    }
  })
});

module.exports = MeType;
