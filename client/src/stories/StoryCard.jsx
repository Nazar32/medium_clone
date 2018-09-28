import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Placeholdable } from '../common';
import StoryInfo from './StoryInfo';

const Story = styled.article`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const Description = styled.div`
  margin-right: 5px;
  flex: 1;
`;

const Image = styled(Placeholdable)`
  border-radius: 5px;
  
  @media screen and (max-width: 500px) {
    width: 80px;
    height: 72px;
  }
  
  @media screen and (min-width: 500px) {
    width: 140px;
  }
`;

const Title = styled(Placeholdable)`
  margin-bottom: 5px;
`;

const Brief = styled(Placeholdable)`
  margin-bottom: 10px;
`;

const Author = styled(Placeholdable)`
  margin-bottom: 5px;
`;

const StoryCard = ({
  id, title, brief,
  author: { firstName, lastName },
  image, updated, readTime,
  skeleton
}) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <Story>
      <Description>
        <Title placeholder={skeleton ? 1 : 0} minHeight="20px" width="75%">
          <Typography variant="title">
            <Link to={`/s/story/${id}`}>
              {!skeleton && title}
            </Link>
          </Typography>
        </Title>
        <Brief placeholder={skeleton ? 1 : 0} minHeight="15px">
          <Link to={`/s/story/${id}`}>
            <Typography variant="caption">
              {!skeleton && brief}
            </Typography>
          </Link>
        </Brief>
        <Author placeholder={skeleton ? 1 : 0} minHeight="15px" width="30%">
          <Typography variant="body1">
            {!skeleton && fullName}
          </Typography>
        </Author>
        <Link to={`/s/story/${id}`}>
          <StoryInfo updated={updated} readTime={readTime} skeleton={skeleton} />
        </Link>
      </Description>
      {image && (
        <Image alt={title} src={image} />
      )}
    </Story>
  );
};

StoryCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  brief: PropTypes.string,
  author: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  image: PropTypes.string,
  updated: PropTypes.instanceOf(Date),
  readTime: PropTypes.number,
  skeleton: PropTypes.bool
};
StoryCard.defaultProps = {
  id: '',
  title: '',
  brief: '',
  author: {
    firstName: '',
    lastName: ''
  },
  image: '',
  updated: new Date(),
  readTime: 0,
  skeleton: false
};

export default StoryCard;
