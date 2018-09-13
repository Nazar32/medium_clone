import React from 'react';
import NavBar from '../navigation/NavBar';
import './page.scss';

const HomeStories = () => (
  <div className="webPage">
    <NavBar />
    <div className="webPage_content">
      <h1>Home Page works !</h1>
    </div>
    <div className="webPage_footer" />
  </div>
);

export default HomeStories;
