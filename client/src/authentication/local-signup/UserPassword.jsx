import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const UserPassword = ({
  password, passwordRepeat, passwordError, passwordRepeatError, onBlur, onChange
}) => (
  <Fragment>
    <TextField
      required type="password" fullWidth
      margin="normal" label="Password" name="password"
      value={password} onChange={onChange} error={!!passwordError}
      onBlur={onBlur} helperText={passwordError}
    />
    <TextField
      required type="password" fullWidth
      margin="normal" label="Password Repeat" name="passwordRepeat"
      value={passwordRepeat} onChange={onChange} onBlur={onBlur}
      helperText={passwordRepeatError} error={!!passwordRepeatError}
    />
  </Fragment>
);

UserPassword.propTypes = {
  password: PropTypes.string.isRequired,
  passwordRepeat: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  passwordError: PropTypes.string,
  passwordRepeatError: PropTypes.string
};
UserPassword.defaultProps = {
  onBlur: () => { },
  passwordError: '',
  passwordRepeatError: ''
};

export default UserPassword;
