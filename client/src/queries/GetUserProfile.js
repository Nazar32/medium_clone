import gql from 'graphql-tag';

const GetUserProfileQuery = gql`
query GetUserProfile {
  me {
    id
    firstName
    lastName
  }
}
`;

export default GetUserProfileQuery;
