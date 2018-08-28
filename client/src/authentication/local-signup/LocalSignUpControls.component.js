import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import './LocalSignUpControls.scss';

const LocalSignUpControls = (props) => {
		return (
				<Fragment>
						{
								props.step !== 0 && (
										<Button className="control" disabled={props.step === 0} onClick={props.onPrev}>
												Back
										</Button>
								)
						}
						{
								props.step !== props.stepAmount - 1 && (
										<Button className="control" variant="contained" color="primary" onClick={props.onNext}>
												Continue
										</Button>
								)
						}
						{
								props.step === props.stepAmount - 1 && (
										<Button className="control" variant="contained" color="primary" onClick={props.onComplete}>
												Submit
										</Button>
								)
						}
				</Fragment>
		);
};
LocalSignUpControls.propTypes = {
		step: PropTypes.number.isRequired,
		stepAmount: PropTypes.number.isRequired,
		onNext: PropTypes.func.isRequired,
		onPrev: PropTypes.func.isRequired,
		onComplete: PropTypes.func.isRequired
};

export default LocalSignUpControls;
