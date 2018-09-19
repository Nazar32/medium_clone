const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = graphql;

const UserTokenType = new GraphQLObjectType({
	name: 'UserToken',
	fields: {
		token: { type: new GraphQLNonNull(GraphQLString) }
	}
});

module.exports = UserTokenType;
