import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField';
import './UserIdentification.scss';

const UserIdentification = (props) => {
		return (
				<Fragment>
						<div className="formGroup">
								<TextField required className="formGroup_input" margin="normal"
													 label="First Name" name="firstName" onChange={props.onChange} />
								<TextField required className="formGroup_input" margin="normal"
													 label="Last Name" name="lastName" onChange={props.onChange} />
						</div>

						<TextField required type="email" fullWidth margin="normal"
											 label="Email" name="email" onChange={props.onChange}/>
				</Fragment>
		);
}
UserIdentification.propTypes = {
		onChange: PropTypes.func.isRequired
};

export default UserIdentification;
