import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { Toolbar, Button } from '@material-ui/core';
import {
  NavBar, LogoIcon, LoadingIcon, UserProfile
} from '../../common';
import GET_USER_PROFILE from '../../queries/GetUserProfile';
import './nav.scss';

const StoryCreatorNav = () => (
  <NavBar>
    <Toolbar className="nav">
      <div className="status">
        <Link className="status_link" to="/">
          <LogoIcon width="40px" height="40px" />
        </Link>
        <span className="status_type">Draft</span>
        <span className="status_sync">Saved</span>
      </div>
      <div className="controls">
        <Button type="button">Share</Button>
        <Button type="button" variant="outlined" color="primary">Publish</Button>
        <Button type="button">...</Button>

        <Query query={GET_USER_PROFILE}>
          {({ data: { me }, loading }) => {
            if (loading) {
              return (<LoadingIcon />);
            }

            if (me) {
              return (<UserProfile firstName={me.firstName} lastName={me.lastName} />);
            }

            return null;
          }}
        </Query>
      </div>
    </Toolbar>
  </NavBar>
);

export default StoryCreatorNav;
