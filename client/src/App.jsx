import React from 'react';
import { Route } from 'react-router-dom';
import './styles/App.scss';

import NavBar from './core';
import { SignUp } from './authentication';

const App = () => (
  <div className="webPage">
    <NavBar />
    <div className="webPage_content">
      <Route path="/login" component={SignUp} />
    </div>
    <div className="webPage_footer" />
  </div>
);

export default App;
