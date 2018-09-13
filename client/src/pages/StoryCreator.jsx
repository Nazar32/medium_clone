import React from 'react';
import NavBar from '../navigation/NavBar';
import './page.scss';

const StoryCreator = () => (
  <div className="webPage">
    <NavBar />
    <div className="webPage_content">
      <h1>Story creator works</h1>
    </div>
    <div className="webPage_footer" />
  </div>
);

export default StoryCreator;
