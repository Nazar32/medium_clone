import React from 'react';
import PropTypes from 'prop-types';
import { Modal, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import LocalSignIn from '../local-signin/LocalSignIn';

import './SignInModal.scss';

const SignInModal = ({
  fullScreen, isOpen, onClose, onComplete, onCancel
}) => {
  let modalClassNames = [
    'modal',
    fullScreen ? 'modal--fullScreen' : 'modal--normal'
  ];
  modalClassNames = modalClassNames.join(' ');

  const handleCancel = () => {
    onClose();
    onCancel();
  };

  const handleComplete = () => {
    onClose();
    onComplete();
  };

  return (
    <Modal
      aria-labelledby="modal-title"
      open={isOpen}
      onClose={handleCancel}
      style={{ overflow: 'scroll' }}
    >
      <div className={modalClassNames}>
        <h3 className="headline" id="modal-title">
          <span className="headline_title">Sign Up</span>
          <IconButton onClick={handleCancel}>
            <CloseIcon />
          </IconButton>
        </h3>
        <div className="modal_content">
          <LocalSignIn onComplete={handleComplete} />
        </div>
      </div>
    </Modal>
  );
};

SignInModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onComplete: PropTypes.func,
  fullScreen: PropTypes.bool
};
SignInModal.defaultProps = {
  onCancel: () => { },
  onComplete: () => { },
  fullScreen: false
};

export default SignInModal;
