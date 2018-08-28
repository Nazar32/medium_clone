import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import LocalSignUp from '../local-signup/LocalSignUp.component';

import './SignUpModal.scss';

class SignUpModal extends Component {
		constructor(props) {
				super(props);

				this.state = {
						open: true
				};
		}

		render () {
				return (
						<Modal aria-labelledby="modal-title"
							open={this.props.isOpen} onClose={this.props.onClose}>
								<div className="modal">
										<h3 className="modal_title" id="modal-title">Sign Up</h3>
										<div className="modal_content">
												<LocalSignUp onComplete={this.onClose}/>
										</div>
								</div>
						</Modal>
				);
		}
}
SignUpModal.propTypes = {
		isOpen: PropTypes.bool.isRequired,
		onClose: PropTypes.func.isRequired
};

export default SignUpModal;
