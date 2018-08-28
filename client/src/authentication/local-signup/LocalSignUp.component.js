import React, {Component} from 'react';
import PropTypes from 'prop-types';

import UserIdentification from './UserIdentification.component';
import UserPassword from './UserPassword.component';
import LocalSignUpControls from './LocalSignUpControls.component';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

import './LocalSignUp.scss';

class LocalSignUpForm extends Component {
		constructor(props) {
				super(props);
				this.classes = props.classes;

				this.state = {activeStep: 0};
				this.steps = [{
						label: 'Enter Your Credentials',
						view: (<UserIdentification onChange={this.handleChange}/>)
				},{
						label: 'Choose a Password',
						view: (<UserPassword onChange={this.handleChange}/>)
				}, {
						view: (<div>
								<Typography align="center" variant="caption">
										By signing up you agree with our Privacy Policy & Terms of Service
								</Typography>
						</div>)
				}];
		}

		handleNext = () => {
				let {activeStep} = this.state;
				activeStep++;

				this.setState({activeStep});
		};

		handleBack = () => {
				let {activeStep} = this.state;
				activeStep--;

				this.setState({activeStep});
		};

		handleSubmit = () => {
				if (this.state.activeStep < this.steps.length - 1) {
						return this.handleNext();
				}

				// post a mutation
				if (this.props.onComplete)
						this.props.onComplete();
		};

		handleChange = (event) => {
				const {name, value} = event.target;
				this.setState({
						[name]: value
				});
		}

		render () {
				const {activeStep} = this.state;
				const steps = this.steps;

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
										<LocalSignUpControls step={activeStep} stepAmount={steps.length}
																			 onNext={this.handleNext}
																			 onPrev={this.handleBack}
																			 onComplete={this.handleSubmit}/>
								</div>
						</form>
				);
		}
}
LocalSignUpForm.propTypes = {
		onComplete: PropTypes.func
};

export default LocalSignUpForm;
