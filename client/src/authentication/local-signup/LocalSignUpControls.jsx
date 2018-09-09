import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { LoadingIcon } from '../../common';
import './LocalSignUpControls.scss';

const LocalSignUpControls = ({
  valid, step, stepAmount, loading, onPrev, onNext, onComplete
}) => (
  <Fragment>
    {
      step !== 0 && (
        <Button
          className="control" disabled={step === 0} onClick={onPrev}
        >
          Back
        </Button>
      )
    }
    {
      step !== stepAmount - 1 && (
        <Button
          className="control" variant="contained" color="primary"
          onClick={onNext}
        >
          Continue
        </Button>
      )
    }
    {
      step === stepAmount - 1 && (
        <Button
          className="control" variant="contained" color="primary"
          onClick={onComplete} disabled={!valid || loading}
        >
          Submit
          {loading === true ? (<LoadingIcon />) : null}
        </Button>
      )
    }
  </Fragment>
);

LocalSignUpControls.propTypes = {
  valid: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,
  stepAmount: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default LocalSignUpControls;
