import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { Hidden } from '@material-ui/core';
import GET_USER_PROFILE from '../../queries/GetUserProfile';
import SignInModal from '../modals/SignInModal';
import LoadingIcon from '../../common/LoadingIcon';

// TODO Remove all constructors
class AuthRequired extends Component {
  state = {
    isLoginOpen: true,
    redirect: false
  };

  handleAuthenticationClose = () => {
    this.setState({
      isLoginOpen: false
    });
  }

  handleAuthenticationCancel = () => {
    this.setState({
      redirect: true
    });
  };

  handleAuthenticationComplete = () => {
    this.setState({
      redirect: false
    });
  };

  render() {
    const { children } = this.props;
    const { isLoginOpen, redirect } = this.state;

    return (
      <Query query={GET_USER_PROFILE}>
        {({ loading, error, data }) => {
          if (redirect) {
            return (<Redirect to="/" />);
          }

          if (loading) {
            return (<LoadingIcon />);
          }

          if (error || !data || !data.me) {
            return (
              <Fragment>
                <Hidden xsDown>
                  <SignInModal
                    isOpen={isLoginOpen}
                    onClose={this.handleAuthenticationClose}
                    onCancel={this.handleAuthenticationCancel}
                    onComplete={this.handleAuthenticationComplete}
                  />
                </Hidden>
                <Hidden smUp>
                  <SignInModal
                    fullScreen
                    isOpen={isLoginOpen}
                    onClose={this.handleAuthenticationClose}
                    onCancel={this.handleAuthenticationCancel}
                    onComplete={this.handleAuthenticationComplete}
                  />
                </Hidden>
              </Fragment>
            );
          }

          return children;
        }}
      </Query>
    );
  }
}
AuthRequired.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(AuthRequired);
