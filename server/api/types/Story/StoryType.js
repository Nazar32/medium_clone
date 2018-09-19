const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = graphql;

const StoryType = new GraphQLObjectType({
  name: 'Story',
  fields: () => {
    const { UserType } = require('../User');
    
    return {
      id: { type: new GraphQLNonNull(GraphQLString) },
      title: { type: GraphQLString },
      author: { type: UserType },
      sections: { type: GraphQLString }
    };
  }
});

module.exports = StoryType;
