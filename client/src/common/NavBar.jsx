import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, withStyles } from '@material-ui/core';

const styles = {
  root: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    maxWidth: 1000,
    margin: '0 auto'
  }
};

const NavBar = ({ children, classes }) => (
  <AppBar position="sticky" classes={{ root: classes.root }}>
    {children}
  </AppBar>
);
NavBar.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(NavBar);
