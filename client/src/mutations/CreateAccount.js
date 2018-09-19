import gql from 'graphql-tag';

const mutation = gql`
  mutation SignUp($input: CreateUserInput!) {
    signUp(input: $input) {
      token
    }
  }
`;

export default mutation;
