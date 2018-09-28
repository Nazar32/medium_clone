import gql from 'graphql-tag';

export default gql`
  query GetStoryById($input: GetStoryInput!) {
    story(input: $input) {
      id
      title
      brief
      author {
        firstName
        lastName
        stories {
          id
          title
        }
      }
      sections {
        id
        items {
          id
          variant
          content
        }
      }
    }
  }
`;
