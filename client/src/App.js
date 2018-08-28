import React, { Component, Fragment } from 'react';
import './styles/App.scss';

import {NavBar} from './core';
import {SignUp} from './authentication';
import {Route} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

class App extends Component {
    render() {
        return (
            <div className="webPage">
                <NavBar/>
                <div className="webPage_content">
										<Route path="/login" component={SignUp}/>
                </div>
                <div className="webPage_footer">

                </div>
            </div>
        );
    }
}

export default App;
