import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Typography } from '@material-ui/core';
import { Author } from '../users';
import StoryCard from './StoryCard';
import StorySection from './StorySection';
import StoryInfo from './StoryInfo';

const Article = styled.article`
  margin: 20px 0;
`;

const Header = styled.header`
  max-width: 700px;
  margin: 20px auto;
`;

const Story = ({
  id, title, brief,
  sections,
  author, image, updated
}) => {
  return (
    <Article key={id}>
      <Header>
        <Author firstName={author.firstName} lastName={author.lastName}>
          <StoryInfo updated={updated || new Date()} readTime={0} />
        </Author>
        <Typography variant="display1">
          {title}
        </Typography>
        <Typography variant="subheading">
          {brief}
        </Typography>
      </Header>
      <div>
        {sections.map(section => (
          <StorySection key={section.id} items={section.items} />
        ))}
      </div>
    </Article>
  );
}

Story.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  brief: PropTypes.string,
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired,
  image: PropTypes.string,
  updated: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          variant: PropTypes.string.isRequired,
          content: PropTypes.string
        })
      )
    })
  )
};
Story.defaultProps = {
  title: '',
  brief: '',
  image: '',
  updated: new Date(),
  sections: []
};

export default Story;
