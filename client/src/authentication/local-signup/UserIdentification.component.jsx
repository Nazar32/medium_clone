import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const UserIdentification = ({ onChange }) => (
  <Fragment>
    <TextField
      margin="normal" label="First Name"
      placeholder="Madison" name="firstName" fullWidth
      required onChange={onChange}
    />
    <TextField
      fullWidth required
      margin="normal" label="Last Name"
      name="lastName" placeholder="King"
      onChange={onChange}
    />
    <TextField
      fullWidth required type="email"
      margin="normal" label="Email"
      name="email" onChange={onChange}
    />
  </Fragment>
);

UserIdentification.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default UserIdentification;
