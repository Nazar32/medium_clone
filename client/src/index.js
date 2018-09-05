/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

import { ApolloProvider } from 'react-apollo';
import apolloClient from './apolloClient';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const palette = {
  primary: green,
  error: red
};
const theme = createMuiTheme({ palette });

ReactDOM.render((
  <ApolloProvider client={apolloClient}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </ApolloProvider>
), document.getElementById('root'));
registerServiceWorker();
