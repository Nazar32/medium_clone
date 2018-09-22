const graphql = require('graphql');
const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema
} = graphql;

const { MeType } = require('./types/User');
const { StoryType, GetStoryInput } = require('./types/Story');

const UserQueries = require('./queries/user');
const StoryQueries = require('./queries/story');

const { SignUpUser, LoginUser } = require('./mutations/user');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    me: {
      type: MeType,
      resolve: UserQueries.RootQuery.currentUser
    },
    stories: {
      type: new GraphQLList(StoryType),
      resolve: StoryQueries.RootQuery.rootAllStories
    },
    story: {
      type: StoryType,
      args: {
        input: {
          type: new GraphQLNonNull(GetStoryInput)
        }
      },
      resolve: StoryQueries.RootQuery.rootFindStory
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    logIn: LoginUser,
    signUp: SignUpUser
  }
})

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

module.exports = Schema;
