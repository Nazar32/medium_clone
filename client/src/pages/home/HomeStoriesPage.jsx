import React from 'react';
import { Link } from 'react-router-dom';
import HomeStoriesNav from './HomeStoriesNav';
import GenericPage from '../generic/GenericPage';

const HomeStories = () => (
  <GenericPage navBar={(<HomeStoriesNav />)}>
    <h1>Home Page works !</h1>
    <Link to="/newStory">Create Story</Link>
  </GenericPage>
);

export default HomeStories;
