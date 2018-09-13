import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import LocalSignIn from '../local-signin/LocalSignIn';

import './SignInModal.scss';

const SignInModal = ({ fullScreen, isOpen, onClose }) => {
  let modalClassNames = [
    'modal',
    fullScreen ? 'modal--fullScreen' : 'modal--normal'
  ];
  modalClassNames = modalClassNames.join(' ');

  return (
    <Modal aria-labelledby="modal-title" open={isOpen} onClose={onClose}>
      <div className={modalClassNames}>
        <h3 className="headline" id="modal-title">
          <span className="headline_title">Sign Up</span>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </h3>
        <div className="modal_content">
          <LocalSignIn onComplete={onClose} />
        </div>
      </div>
    </Modal>
  );
};

SignInModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fullScreen: PropTypes.bool
};
SignInModal.defaultProps = {
  fullScreen: false
};

export default SignInModal;
