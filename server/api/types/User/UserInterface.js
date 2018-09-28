const graphql = require('graphql');
const {
  GraphQLInterfaceType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} = graphql;

const UserInterface = new GraphQLInterfaceType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString }
  })
});

module.exports = UserInterface;
