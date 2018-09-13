import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { green, blue, amber } from '@material-ui/core/colors';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  info: {
    backgroundColor: blue[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  success: {
    backgroundColor: green[600]
  },
  warning: {
    backgroundColor: amber[200]
  },
  icon: {
    fontSize: 22
  }
});

const Notification = ({
  classes, message, variant, onClose
}) => (
  <SnackbarContent
    className={classes[variant]}
    message={message}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon className={classes.icon} />
      </IconButton>
    ]}
  />
);
Notification.propTypes = {
  variant: PropTypes.oneOf(['info', 'error', 'success', 'warning']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired
};
const NotificationWrapper = withStyles(styles)(Notification);

const closedState = {
  open: false,
  message: ''
};

let openSnackbarFn;
class Notifier extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      message: ''
    };
  }

  componentDidMount() {
    openSnackbarFn = this.openSnackbar;
  }

  openSnackbar = ({ message, variant = 'info' }) => {
    this.setState({
      open: true,
      message,
      variant
    });
  }

  handleSnackbarClose = () => {
    this.setState(closedState);
  }

  render() {
    const { variant, message, open } = this.state;

    return (
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        autoHideDuration={3000}
        key={message}
        open={open}
        onClose={this.handleSnackbarClose}
      >
        <NotificationWrapper
          message={message}
          onClose={this.handleSnackbarClose}
          variant={variant}
        />
      </Snackbar>
    );
  }
}

/**
 * Display notification on the screen
* @param {String} message Message to display
* @param {'error' | 'warning' | 'info' | 'success'} [variant] Appearance variant.
  * @default 'info'
  */
export function openSnackbar({ message, variant }) {
  openSnackbarFn({ message, variant });
}
export default Notifier;
