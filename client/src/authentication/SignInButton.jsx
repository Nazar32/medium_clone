import React, { Component, Fragment } from 'react';
import { Button, Hidden, Typography } from '@material-ui/core';

import SignInModal from './modals/SignInModal';

const initialState = {
  isSignUpOpen: false
};

class SignUpButton extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  openSignUpModal = () => {
    this.setState({ isSignUpOpen: true });
  }

  closeSignUpModal = () => {
    this.setState(initialState);
  }

  render() {
    const { isSignUpOpen } = this.state;

    return (
      <Fragment>
        <Hidden xsDown>
          <Button variant="outlined" color="primary" onClick={this.openSignUpModal}>
            <Typography>
              Sign In
            </Typography>
          </Button>
          <SignInModal isOpen={isSignUpOpen} onClose={this.closeSignUpModal} />
        </Hidden>
        <Hidden smUp>
          <Button variant="outlined" color="primary" onClick={this.openSignUpModal}>
            <Typography>
              Sign In
            </Typography>
          </Button>
          <SignInModal fullScreen isOpen={isSignUpOpen} onClose={this.closeSignUpModal} />
        </Hidden>
      </Fragment>
    );
  }
}

export default SignUpButton;
