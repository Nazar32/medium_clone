import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';

const TextItemTypography = withStyles({
  body1: {
    fontFamily: '"Merriweather", serif;',
    fontSize: '1.1rem',
    lineHeight: '1.6em',
    marginBottom: '20px'
  }
})(Typography);

const StoryItem = ({ variant, content }) => {
  if (variant === 'TEXT') {
    return (
      <TextItemTypography>
        {content}
      </TextItemTypography>
    );
  }

  return null;
};
StoryItem.propTypes = {
  variant: PropTypes.oneOf(['TEXT']).isRequired,
  content: PropTypes.string
};
StoryItem.defaultProps = {
  content: ''
};

export default StoryItem;
