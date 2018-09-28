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
const typography = {
  fontSize: 16,
  display4: {

  },
  display3: {

  },
  display2: {

  },
  display1: {
    fontFamily: '"Cardo"',
    fontWeight: 500,
    color: "rgba(0, 0, 0, 1)"
  },
  headline: {

  },
  title: {
    lineHeight: '1.3em'
  },
  subheading: {
    color: "rgba(0, 0, 0, 0.56)"
  },
  body2: {
    
  },
  body1: {
    lineHeight: '1.4em'
  },
  caption: {
    fontSize: '0.85rem',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.56)',
    lineHeight: '1.5em'
  },
  button: {

  }
};

const theme = createMuiTheme({ palette, typography });

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
