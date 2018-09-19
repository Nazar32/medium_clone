const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema
} = graphql;

const { UserType } = require('./types/User');

const UserQueries = require('./queries/user');

const { SignUpUser, LoginUser } = require('./mutations/user');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    me: {
      type: UserType,
      resolve: UserQueries.RootQuery.currentUser
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
