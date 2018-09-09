const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLNonNull
} = graphql;

const UserModel = require('../models/user.model');
const AuthStrategy = require('../services/AuthStrategy.service');

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: GraphQLString },
		firstName: { type: GraphQLString },
		lastName: { type: GraphQLString }
	}
});

const UserTokenType = new GraphQLObjectType({
	name: 'UserToken',
	fields: {
		token: { type: new GraphQLNonNull(GraphQLString) }
	}
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		me: {
			type: UserType,
			async resolve(parentValue, args, request) {
				// get bearer token of the request object provided by graphql-express
				const { token } = request;
				if (!token) {
					return null;
				}

				const userId = await AuthStrategy.verifyToken(token);
				const user = await UserModel.findById(userId).exec();
				if (!user) {
					throw new Error('Invalid token');
				}

				request.user = user;
				const { id, firstName, lastName } = user;
				return { id, firstName, lastName };
			}
		}
	}
});

const AuthMutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		logIn: {
			type: UserTokenType,
			args: {
				email: { type: new GraphQLNonNull(GraphQLString) },
				password: { type: new GraphQLNonNull(GraphQLString) }
			},
			async resolve(parentValue, { email, password }) {
				const user = await UserModel.findOne({ email, password }, {}).exec();

				if (user === null)
					throw new Error('Invalid credentials');

				return {
					token: await AuthStrategy.generateToken(user.id)
				};
			}
		},
		signUp: {
			type: UserTokenType,
			args: {
				firstName: { type: new GraphQLNonNull(GraphQLString) },
				lastName: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				password: { type: new GraphQLNonNull(GraphQLString) }
			},
			async resolve(parentValue, { firstName, lastName, email, password }) {
				let user = new UserModel({
					firstName, lastName, email, password
				});
				user = await user.save();

				return {
					token: await AuthStrategy.generateToken(user.id)
				};
			}
		}
	}
});

const Schema = new GraphQLSchema({
	query: RootQuery,
	mutation: AuthMutation
});

module.exports = Schema;
