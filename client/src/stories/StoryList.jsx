import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Divider } from '@material-ui/core';
import StoryCard from './StoryCard';

const Headline = styled.div`
  margin: 20px 0;
`;

const List = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const ListItem = styled.div`
  margin-bottom: 40px;
`;

const StoryList = ({ headline, stories }) => (
  <List>
    <Headline>
      <Typography variant="title">
        {headline}
      </Typography>
      <Divider />
    </Headline>
    {
      stories.map(
        ({
          id, title, brief, author, image, updated, readTime, skeleton
        }) => (
          <ListItem key={id}>
            <StoryCard
              id={id}
              title={title}
              brief={brief}
              author={author}
              image={image}
              updated={updated}
              readTime={readTime}
              skeleton={skeleton}
            />
          </ListItem>
        )
      )
    }
  </List>
);
StoryList.propTypes = {
  headline: PropTypes.string.isRequired,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      brief: PropTypes.string,
      author: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
      }),
      image: PropTypes.string,
      updated: PropTypes.instanceOf(Date),
      readTime: PropTypes.number
    })
  ).isRequired
};

export default StoryList;
