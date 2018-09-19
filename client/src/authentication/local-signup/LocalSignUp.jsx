import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import isEmail from 'validator/lib/isEmail';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

import apolloClient from '../../apolloClient';
import UserIdentification from './UserIdentification';
import UserPassword from './UserPassword';
import LocalSignUpControls from './LocalSignUpControls';
import './LocalSignUp.scss';

import createAccountMutation from '../../mutations/CreateAccount';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordRepeat: '',
  activeStep: 0,
  loading: false,
  errors: {}
};

class LocalSignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleNext = () => {
    let { activeStep } = this.state;
    activeStep += 1;

    this.setState({ activeStep });
  }

  handleBack = () => {
    let { activeStep } = this.state;
    activeStep -= 1;
    this.setState({ activeStep });
  }

  canSubmit = () => {
    const {
      firstName, lastName, email, password, errors
    } = this.state;

    const hasError = Object.values(errors).some(value => !!value);

    return !!firstName && !!lastName && !!email && !!password && !hasError;
  }

  handleSubmit = async (event) => {
    const { mutate, onComplete } = this.props;
    const {
      activeStep, firstName, lastName, email, password
    } = this.state;

    if (activeStep < 2) {
      return this.handleNext();
    }

    event.preventDefault();
    this.setState({ loading: true });
    try {
      const { data: { signUp: { token } } } = await mutate({
        variables: {
          input: {
            firstName, lastName, email, password
          }
        }
      });

      localStorage.setItem('token', token);
      apolloClient.resetStore();

      this.setState(initialState);
      return onComplete();
    } catch (error) {
      return this.setState({
        ...initialState,
        errors: {
          submit: error.message
        }
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState(() => ({
      [name]: value
    }));
  }

  handlePasswordValidation = () => {
    this.setState(({ errors, password, passwordRepeat }) => {
      const newErrors = { ...errors };
      newErrors.submit = null;

      newErrors.password = password && password.length <= 3 ? 'Password must be longer then 3 symbols' : null;

      if (password && password.length > 3 && !passwordRepeat) {
        newErrors.passwordRepeat = 'Repeat you password';
      } else {
        newErrors.passwordRepeat = (
          password
          && passwordRepeat
          && password !== passwordRepeat
        ) ? 'Password does not match' : null;
      }

      return {
        errors: newErrors
      };
    });
  }

  handleCredentialsValidation = () => {
    this.setState(({ errors, email }) => {
      const newErrors = { ...errors };
      newErrors.submit = null;

      if (email) {
        newErrors.email = !isEmail(email) ? 'Incorrect email' : null;
      }

      return {
        errors: newErrors
      };
    });
  }

  getSteps = () => {
    const {
      firstName, lastName, email,
      password, passwordRepeat, errors
    } = this.state;

    return [{
      label: 'Enter Your Credentials',
      view: (<UserIdentification
        firstName={firstName}
        lastName={lastName}
        email={email}
        emailError={errors.email}
        onChange={this.handleChange}
        onBlur={this.handleCredentialsValidation}
      />)
    }, {
      label: 'Choose a Password',
      view: (<UserPassword
        password={password} passwordRepeat={passwordRepeat}
        passwordError={errors.password} passwordRepeatError={errors.passwordRepeat}
        onBlur={this.handlePasswordValidation} onChange={this.handleChange}
      />)
    }, {
      view: (
        <div>
          <Typography align="center" variant="caption">
            By signing up you agree with our Privacy Policy & Terms of Service
          </Typography>
        </div>
      )
    }];
  }

  render() {
    const steps = this.getSteps();
    const {
      errors, loading, activeStep
    } = this.state;

    return (
      <form className="localSignUp" onSubmit={this.handleSubmit}>
        <Stepper activeStep={activeStep}>
          {steps.filter(s => s.label).map(step => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="localSignUp_inputs">
          {steps[activeStep].view}
        </div>
        <div className="localSignUp_controls">
          <LocalSignUpControls
            valid={this.canSubmit()}
            loading={loading === true}
            step={activeStep}
            stepAmount={steps.length}
            onNext={this.handleNext}
            onPrev={this.handleBack}
            onComplete={this.handleSubmit}
          />
        </div>
        {
          !!errors.submit && (
            <Typography color="error">{errors.submit}</Typography>
          )
        }
      </form>
    );
  }
}
LocalSignUpForm.propTypes = {
  onComplete: PropTypes.func
};
LocalSignUpForm.defaultProps = {
  onComplete: () => { }
};

export default graphql(createAccountMutation)(LocalSignUpForm);
