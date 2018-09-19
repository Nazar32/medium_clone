import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  Popper, Grow, Paper, MenuList, MenuItem, Divider,
  Avatar, Button, ListItemText, ListItemIcon, ClickAwayListener
} from '@material-ui/core';

import ExitToApp from '@material-ui/icons/ExitToApp';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import apolloClient from '../apolloClient';
import './UserProfile.scss';

const styles = () => ({
  button: {
    boxShadow: 'none',
    width: 40,
    height: 40
  },
  avatar: {
    height: 40,
    width: 40,
    backgroundColor: green[900]
  }
});

// TODO accept list for dropdown components
class UserProfile extends Component {
  state = {
    open: false
  };

  transformCredentials = () => {
    const { firstName, lastName } = this.props;
    return firstName.toUpperCase()[0] + lastName.toUpperCase()[0];
  }

  handleDropdownClose = () => {
    this.setState({
      open: false
    });
  }

  toggleDropdown = () => {
    this.setState(({ open }) => ({
      open: !open
    }));
  }

  handleDropdownOpen = () => {
    this.setState({
      open: true
    });
  };

  logout = () => {
    localStorage.removeItem('token');
    apolloClient.resetStore();

    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className="container">
        <Button
          className={classes.button}
          variant="fab"
          aria-label="Me"
          onClick={this.handleDropdownOpen}
        >
          <Avatar className={classes.avatar}>{this.transformCredentials()}</Avatar>
        </Button>
        <div className={classnames('actions', { 'actions--hidden': !open })}>
          <Popper open={open} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'center bottom' ? 'center bottom' : 'left bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleDropdownClose}>
                    <MenuList component="nav">
                      <MenuItem dense>
                        <ListItemText>Become a member</ListItemText>
                      </MenuItem>
                      <Divider />
                      <MenuItem dense button onClick={this.logout}>
                        <ListItemIcon>
                          <ExitToApp />
                        </ListItemIcon>
                        <ListItemText>Log Out</ListItemText>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}
UserProfile.propTypes = {
  classes: PropTypes.shape().isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(withStyles(styles)(UserProfile));
