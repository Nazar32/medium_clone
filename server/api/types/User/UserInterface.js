const graphql = require('graphql');
const {
  GraphQLInterfaceType,
  GraphQLID,
  GraphQLString
} = graphql;

const UserInterface = new GraphQLInterfaceType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString }
  })
});

module.exports = UserInterface;
