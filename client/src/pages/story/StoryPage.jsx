import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Query } from 'react-apollo';
import GET_STORY from '../../queries/GetStory';
import { LoadingIcon } from '../../common';
import GenericPage from '../generic/GenericPage';
import HomeStoriesNav from '../home/HomeStoriesNav';
import { Story } from '../../stories';
import { openSnackbar } from '../../common/Notifier';

const StoryPage = ({ match }) => {
  const variables = {
    input: {
      id: match.params.storyId
    }
  };

  return (
    <GenericPage navBar={<HomeStoriesNav />}>
      <Query query={GET_STORY} variables={variables}>
        {({ loading, error, data }) => {
          if (loading) {
            return (<LoadingIcon />);
          }

          if (error) {
            openSnackbar({ message: error.message, variant: 'error' });
          }

          if (data && data.story) {
            const {
              id, title, brief,
              sections,
              author, image, updated
            } = data.story;

            return (
              <Story
                id={id} title={title} brief={brief}
                sections={sections} author={author}
                image={image} updated={updated}
              />
            );
          }

          return null;
        }}
      </Query>
    </GenericPage>
  );
};
StoryPage.propTypes = {
  match: PropTypes.shape({
    storyId: PropTypes.string
  }).isRequired
};

export default withRouter(StoryPage);
