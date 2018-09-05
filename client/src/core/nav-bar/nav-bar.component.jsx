import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { SignUpModal } from '../../authentication';
import './nav-bar.scss';

const style = {
  root: {
    backgroundColor: '#fff',
    boxShadow: 'none'
  }
};

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      isSignUpOpen: false
    };
  }

  openSignUpModal = () => {
    this.setState({ isSignUpOpen: true });
  }

  closeSignUpModal = () => {
    this.setState({ isSignUpOpen: false });
  }

  render() {
    const { isSignUpOpen } = this.state;
    const { classes } = this.props;

    return (
      <AppBar classes={{ root: classes.root }} position="sticky">
        <Toolbar className="navBar">
          <Hidden xsDown>
            <div className="navBar_item navBar_item--centered">
              About Membership
            </div>
          </Hidden>
          <h1 className="navBar_item navBar_title navBar_item--centered">
            Medium
          </h1>
          <div className="navBar_item navBar_item--centered">
            <Hidden xsDown>
              <Button variant="outlined" color="primary" onClick={this.openSignUpModal}>
                <Typography>
                  Sign Up
                </Typography>
              </Button>
              <SignUpModal isOpen={isSignUpOpen} onClose={this.closeSignUpModal} />
            </Hidden>
            <Hidden smUp>
              <Button
                component={Link} to="/login"
                variant="outlined" color="primary"
              >
                <Typography>
                  Sign Up
                </Typography>
              </Button>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(style)(NavBar);
