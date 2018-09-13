import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { withStyles } from '@material-ui/core/styles';
import apolloClient from '../apolloClient';

const styles = ({ spacing: { unit } }) => ({
  rightIcon: {
    marginLeft: unit
  }
});

const LogOutButton = ({ classes, onComplete }) => {
  const logout = () => {
    localStorage.removeItem('token');
    apolloClient.resetStore();
    onComplete();
  };

  return (
    <Button
      disableRipple
      variant="contained"
      color="default"
      onClick={logout}
    >
      Log Out
      <ExitToApp className={classes.rightIcon} />
    </Button>
  );
};

LogOutButton.propTypes = {
  classes: PropTypes.shape().isRequired,
  onComplete: PropTypes.func
};
LogOutButton.defaultProps = {
  onComplete: () => { }
};

export default withStyles(styles)(LogOutButton);
