import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField';

const UserPassword = (props) => {
		return (
				<Fragment>
						<TextField required type="password" fullWidth margin="normal" label="Password" name="password" onChange={props.onChange}/>
						<TextField required type="password" fullWidth margin="normal" label="Password Repeat" name="passwordRepeat" onChange={props.onChange}/>
				</Fragment>
		);
}
UserPassword.propTypes = {
		onChange: PropTypes.func.isRequired
};

export default UserPassword;
