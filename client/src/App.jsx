import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Notifier from './common/Notifier';
import { HomeStoriesPage, StoriesCreatorPage } from './pages';

const App = () => (
  <div>
    <Notifier />
    <Switch>
      <Route exact path="/" component={HomeStoriesPage} />
      <Route path="/home" component={HomeStoriesPage} />
      <Route path="/newStory" component={StoriesCreatorPage} />
    </Switch>
  </div>
);

export default App;
