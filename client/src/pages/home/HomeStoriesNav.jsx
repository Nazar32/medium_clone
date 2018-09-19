import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { Toolbar, Hidden } from '@material-ui/core';

import userProfileQuery from '../../queries/GetUserProfile';
import { openSnackbar } from '../../common/Notifier';
import { LoadingIcon, UserProfile, NavBar } from '../../common';
import { SignInButton, SignUpButton } from '../../authentication';
import './nav.scss';

const HomeStoriesNav = () => (
  <NavBar>
    <Toolbar className="navBar">
      <Hidden smDown>
        <div className="navBar_item navBar_item--left">
          About Membership
        </div>
        <h1 className="navBar_item navBar_title navBar_item--centered">
          <Link to="/" className="logoLink">
            Medium
          </Link>
        </h1>
      </Hidden>
      <Hidden mdUp>
        <h1 className="navBar_item navBar_title navBar_item--left">
          <Link to="/" className="logoLink">
            Medium
          </Link>
        </h1>
      </Hidden>
      <div className="navBar_item navBar_item--right">
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
  </NavBar>
);

export default HomeStoriesNav;
