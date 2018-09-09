import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

import LocalSignUp from '../local-signup/LocalSignUp';
import './SignUpModal.scss';

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
  }
});

const SignUpModal = ({ fullScreen, isOpen, onClose }) => {
  let modalClassNames = [
    'modal',
    fullScreen ? 'modal--fullScreen' : 'modal--normal'
  ];
  modalClassNames = modalClassNames.join(' ');

  return (
    <Modal aria-labelledby="modal-title" open={isOpen} onClose={onClose}>
      <div className={modalClassNames}>
        <h3 className="modal_title" id="modal-title">Sign Up</h3>
        <div className="modal_content">
          <LocalSignUp onComplete={onClose} />
        </div>
      </div>
    </Modal>
  );
};

SignUpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fullScreen: PropTypes.bool
};
SignUpModal.defaultProps = {
  fullScreen: false
};

export default withStyles(styles)(SignUpModal);
