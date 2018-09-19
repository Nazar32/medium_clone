import gql from 'graphql-tag';

export default gql`
  mutation LocalSignIn($input: LoginUserInput!) {
    logIn(input: $input) {
      token
    }
  }
`;
