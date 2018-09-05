import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

import UserIdentification from './UserIdentification.component';
import UserPassword from './UserPassword.component';
import LocalSignUpControls from './LocalSignUpControls.component';
import './LocalSignUp.scss';

import createAccountMutation from '../../mutations/CreateAccount';

const initialState = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  activeStep: 0
};

class LocalSignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.steps = [{
      label: 'Enter Your Credentials',
      view: (<UserIdentification onChange={this.handleChange} />)
    }, {
      label: 'Choose a Password',
      view: (<UserPassword onChange={this.handleChange} />)
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

  handleSubmit = async (event) => {
    const { mutate, onComplete } = this.props;
    const {
      activeStep, firstName, lastName, email, password
    } = this.state;

    if (activeStep < this.steps.length - 1) {
      return this.handleNext();
    }

    // post a mutation
    event.preventDefault();
    await mutate({
      variables: {
        firstName, lastName, email, password
      }
    });

    this.setState(initialState);
    return onComplete();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { activeStep } = this.state;
    const { steps } = this;

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
            step={activeStep}
            stepAmount={steps.length}
            onNext={this.handleNext}
            onPrev={this.handleBack}
            onComplete={this.handleSubmit}
          />
        </div>
      </form>
    );
  }
}
LocalSignUpForm.propTypes = {
  onComplete: PropTypes.func
};
LocalSignUpForm.defaultProps = {
  onComplete: () => {}
};

export default graphql(createAccountMutation)(LocalSignUpForm);
