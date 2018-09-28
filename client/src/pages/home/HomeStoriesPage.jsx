import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import GET_HOME_STORIES from '../../queries/GetHomeStories';

import HomeStoriesNav from './HomeStoriesNav';
import GenericPage from '../generic/GenericPage';
import { StoryList } from '../../stories';
import { openSnackbar } from '../../common/Notifier';

const emptyStories = Array.apply(null, Array(20)).map((obj, i) => ({ // eslint-disable-line
  id: `${i}`,
  title: '',
  brief: '',
  author: {},
  image: '',
  updated: new Date(),
  readTime: 0,
  skeleton: true
}));

const HomeStories = () => (
  <GenericPage navBar={(<HomeStoriesNav />)}>
    <Query query={GET_HOME_STORIES}>
      {({ data, loading, error }) => {
        if (loading) {
          return (<StoryList headline="Latest stories" stories={emptyStories} />);
        }

        if (data && data.stories) {
          return (<StoryList headline="Latest stories" stories={data.stories} />);
        }

        if (error) {
          openSnackbar({ message: error.message, variant: 'error' });
        }

        return null;
      }}
    </Query>
    <Link to="/newStory">Create Story</Link>
  </GenericPage>
);

export default HomeStories;
