const graphql = require('graphql');
const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} = graphql;

const AuthStrategy = require('../../../services/AuthStrategy.service');
const UserModel = require('../../../models/user.model');
const { UserTokenType } = require('../../types/User');

const LoginUserInput = new GraphQLInputObjectType({
  name: 'LoginUserInput',
  fields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  }
});

module.exports = {
  type: UserTokenType,
  description: 'This mutation will provide user with authentiction token',
  args: {
    input: { type: new GraphQLNonNull(LoginUserInput) }
  },
  resolve: async (_, { input: { email, password } }) => {
    const user = await UserModel.findOne({ email, password }, {}).exec();

    if (user === null)
      throw new Error('Invalid credentials');

    return {
      token: await AuthStrategy.generateToken(user.id)
    };
  }
};
