import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';

import { withStyles } from '@material-ui/core/styles';

import LocalSignUp from '../local-signup/LocalSignUp.component';

import './SignUpModal.scss';

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
  }
});

const SignUpModal = ({ isOpen, onClose }) => (
  <Modal aria-labelledby="modal-title" open={isOpen} onClose={onClose}>
    <div className="modal">
      <h3 className="modal_title" id="modal-title">Sign Up</h3>
      <div className="modal_content">
        <LocalSignUp onComplete={onClose} />
      </div>
    </div>
  </Modal>
);

SignUpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(SignUpModal);
