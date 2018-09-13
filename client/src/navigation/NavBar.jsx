import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

import userProfileQuery from '../queries/GetUserProfile';
import { openSnackbar } from '../common/Notifier';
import { LoadingIcon, UserProfile } from '../common';
import { SignInButton, SignUpButton } from '../authentication';
import './nav-bar.scss';

const style = {
  root: {
    backgroundColor: '#fff',
    boxShadow: 'none'
  },
  signInButton: {
    margin: 20
  }
};

const NavBar = ({ classes }) => (
  <AppBar classes={{ root: classes.root }} position="sticky">
    <Toolbar className="navBar">
      <Hidden smDown>
        <div className="navBar_item navBar_item--centered">
          About Membership
        </div>
      </Hidden>
      <h1 className="navBar_item navBar_title navBar_item--centered">
        Medium
      </h1>
      <div className="navBar_item navBar_item--centered">
        <Query query={userProfileQuery}>
          {({ data, loading, error }) => {
            if (loading) {
              return (<LoadingIcon />);
            }
            if (data && data.me) {
              const { me: { firstName, lastName } } = data;
              return (<UserProfile firstName={firstName} lastName={lastName} />);
            }
            if (error) {
              openSnackbar({ message: error.message, variant: 'error' });
              localStorage.removeItem('token');
            }

            return (
              <div className="authentication">
                <Hidden xsDown>
                  <div className="authentication_signInButton">
                    <SignInButton />
                  </div>
                </Hidden>
                <SignUpButton />
              </div>
            );
          }}
        </Query>
      </div>
    </Toolbar>
  </AppBar>
);

NavBar.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(style)(NavBar);
