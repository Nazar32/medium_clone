import React, {
		Component
} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './SignUp.scss';


import LocalSignUp from '../local-signup/LocalSignUp.component';

class Auth extends Component {
		constructor(props) {
				super(props);
		}

		render() {
				return (
						<Grid justify="center" container>
								<Grid xs={12} sm={6}>
										<div className="signUp">
												<h3 className="signUp_title">Sign Up</h3>
												<div className="signUp_form">
														<LocalSignUp/>
												</div>
										</div>
								</Grid>
						</Grid>
				);
		}
}

export default Auth;
