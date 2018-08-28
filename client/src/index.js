import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
		BrowserRouter as Router
} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {green, red} from '@material-ui/core/colors';

const palette = {
		primary: green,
		error: red
};
const theme = createMuiTheme({palette});

ReactDOM.render((
		<Router>
				<MuiThemeProvider theme={theme}>
						<App />
				</MuiThemeProvider>
		</Router>
), document.getElementById('root'));
registerServiceWorker();
