import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const UserIdentification = ({
  firstName, lastName, email, emailError,
  onChange, onBlur
}) => (
  <Fragment>
    <TextField
      margin="normal" label="First Name" value={firstName}
      placeholder="Madison" name="firstName" fullWidth
      required onChange={onChange} onBlur={onBlur}
    />
    <TextField
      fullWidth required value={lastName}
      margin="normal" label="Last Name"
      name="lastName" placeholder="King"
      onChange={onChange} onBlur={onBlur}
    />
    <TextField
      fullWidth required type="email"
      value={email} margin="normal" label="Email"
      placeholder="some@gmail.com" name="email"
      error={!!emailError} helperText={emailError}
      onChange={onChange} onBlur={onBlur}
    />
  </Fragment>
);

UserIdentification.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  emailError: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func
};
UserIdentification.defaultProps = {
  emailError: '',
  onBlur: () => {}
};

export default UserIdentification;
