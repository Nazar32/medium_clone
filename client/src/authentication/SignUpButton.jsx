import React, { Component, Fragment } from 'react';
import { Button, Hidden, Typography } from '@material-ui/core';

import SignUpModal from './modals/SignUpModal';

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
        <Hidden smDown>
          <Button variant="outlined" color="primary" onClick={this.openSignUpModal}>
            <Typography>
              Get Started
            </Typography>
          </Button>
          <SignUpModal isOpen={isSignUpOpen} onClose={this.closeSignUpModal} />
        </Hidden>
        <Hidden mdUp>
          <Button variant="outlined" color="primary" onClick={this.openSignUpModal}>
            <Typography>
              Get Started
            </Typography>
          </Button>
          <SignUpModal fullScreen isOpen={isSignUpOpen} onClose={this.closeSignUpModal} />
        </Hidden>
      </Fragment>
    );
  }
}

export default SignUpButton;
