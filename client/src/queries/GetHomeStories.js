import gql from 'graphql-tag';

export default gql`
  query GetHomeStories {
    stories {
      id
      title
      brief
      author {
        firstName
        lastName
      }
    }
  }
`;
