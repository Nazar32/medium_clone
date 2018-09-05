const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLDirective,
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
				console.log('Request User', request.user.id);
				if (!request.user)
					throw new Error('You are not authenticated');

				return await UserModel.findById(request.user.id).exec();
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
