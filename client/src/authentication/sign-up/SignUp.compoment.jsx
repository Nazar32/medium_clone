import React from 'react';
import Grid from '@material-ui/core/Grid';

import LocalSignUp from '../local-signup/LocalSignUp.component';
import './SignUp.scss';

const Auth = () => (
  <Grid justify="center" container>
    <Grid xs={12} sm={6}>
      <div className="signUp">
        <h3 className="signUp_title">Sign Up</h3>
        <div className="signUp_form">
          <LocalSignUp />
        </div>
      </div>
    </Grid>
  </Grid>
);

export default Auth;
