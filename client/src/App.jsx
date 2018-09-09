import React from 'react';
import './styles/App.scss';

import NavBar from './navigation';
import Notifier from './common/Notifier';

const App = () => (
  <div className="webPage">
    <Notifier />
    <NavBar />
    <div className="webPage_content" />
    <div className="webPage_footer" />
  </div>
);

export default App;
