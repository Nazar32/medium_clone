import gql from 'graphql-tag';

const mutation = gql`
  mutation SignUp ($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    signUp (firstName: $firstName, lastName:$lastName, email:$email, password:$password) {
      token
    }
  }
`;

export default mutation;
