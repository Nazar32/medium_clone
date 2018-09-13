import gql from 'graphql-tag';

export default gql`
  mutation LocalSignIn ($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      token
    }
  }
`;
