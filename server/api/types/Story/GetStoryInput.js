const graphql = require('graphql');
const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID
} = graphql;

const GetStoryInput = new GraphQLInputObjectType({
  name: 'GetStoryInput',
  description: 'Filters to fetch the story',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  }
});

module.exports = GetStoryInput;
