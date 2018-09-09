import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { ExitToApp } from '@material-ui/icons';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    position: 'relative',
    height: 50,
    width: 50,
    border: '5px solid lightgray',
    borderRadius: '50% 50% 0 50%',
    backgroundColor: '#000'
  },
  avatarText: {
    color: '#fff'
  },
  dropdown: {
    position: 'absolute',
    width: '35px',
    left: '20px',
    top: '44px',
    backgroundColor: 'lightgray',
    zIndex: -1,
    borderRadius: '0 50% 0% 50%'
  }
});

// TODO accept list for dropdown components

const UserProfile = ({ classes, firstName, lastName }) => {
  const mapCredentials = () => firstName.toUpperCase()[0] + lastName.toUpperCase()[0];

  return (
    <div className={classes.root}>
      <ButtonBase className={classes.avatar} aria-label="Me">
        <Typography className={classes.avatarText}>
          {mapCredentials()}
        </Typography>
        <div className={classes.dropdown}>
          <ExitToApp />
        </div>
        {/* <List disablePadding className={classes.dropdown}>
          <ListItem disableGutters>
            <ExitToApp />
          </ListItem>
        </List> */}
      </ButtonBase>
    </div>
  );
};

UserProfile.propTypes = {
  classes: PropTypes.shape().isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default withStyles(styles)(UserProfile);
