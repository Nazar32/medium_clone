import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { isEmail } from 'validator';
import { Mutation } from 'react-apollo';
import LocalSignInMutation from '../../mutations/LocalSignIn';
import LoadingIcon from '../../common/LoadingIcon';
import client from '../../apolloClient';
import './LocalSignIn.scss';

const initialState = {
  email: '',
  password: '',
  touched: {
    email: false,
    password: false
  },
  errors: {
    email: '',
    password: ''
  }
};

const styles = ({ spacing: { unit } }) => ({
  rightIcon: {
    marginLeft: unit
  }
});

class LocalSignIn extends Component {
  constructor() {
    super();

    this.state = initialState;
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(({ touched }) => ({
      [name]: value,
      touched: {
        ...touched,
        [name]: true
      }
    }));
  }

  handleLogIn = async (mutation, event) => {
    const { email, password } = this.state;
    const { onComplete } = this.props;

    event.preventDefault();
    event.stopPropagation();

    const response = await mutation({
      variables: {
        input: {
          email, password
        }
      }
    });
    const { data: { logIn: { token } } } = response;
    localStorage.setItem('token', token);
    client.resetStore();
    this.setState(initialState);
    onComplete();
  }

  handleValidation = () => {
    const { email, password, touched } = this.state;

    const errors = { ...initialState.errors };
    if (touched.email) {
      if (!email) {
        errors.email = 'Email is required';
      } else if (!isEmail(email)) {
        errors.email = 'Email is not valid';
      }
    }

    if (touched.password) {
      if (!password) {
        errors.password = 'Password is required';
      }
    }

    return this.setState({
      errors
    });
  }

  render() {
    const { email, password, errors } = this.state;
    return (
      <Mutation mutation={LocalSignInMutation}>
        {(localSignIn, { loading, error }) => (
          <form onSubmit={e => this.handleLogIn(localSignIn, e)}>
            <div className="fields">
              <TextField
                type="email"
                name="email"
                label="Email"
                id="email"
                margin="normal"
                placeholder="some@gmail.com"
                value={email}
                required
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
                onChange={this.handleChange}
                onBlur={this.handleValidation}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                id="password"
                margin="normal"
                required
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
                value={password}
                onChange={this.handleChange}
                onBlur={this.handleValidation}
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Sign In
              {loading === true ? (<LoadingIcon />) : null}
            </Button>
            {
              error && (<Typography color="error" align="left">{error.message}</Typography>)
            }
          </form>
        )}
      </Mutation>
    );
  }
}
LocalSignIn.propTypes = {
  onComplete: PropTypes.func
};
LocalSignIn.defaultProps = {
  onComplete: () => { }
};

export default withStyles(styles)(LocalSignIn);
