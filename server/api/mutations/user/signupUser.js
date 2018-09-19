const graphql = require('graphql');
const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} = graphql;
const AuthStrategy = require('../../../services/AuthStrategy.service');
const UserModel = require('../../../models/user.model');
const { UserTokenType } = require('../../types/User');

const CreateUserInput = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  }
});

module.exports = {
  type: UserTokenType,
  args: {
    input: { type: new GraphQLNonNull(CreateUserInput) }
  },
  resolve: async (_, { input: { firstName, lastName, email, password } }) => {
    let user = new UserModel({
      firstName, lastName, email, password
    });
    user = await user.save();

    return {
      token: await AuthStrategy.generateToken(user.id)
    };
  }
};
