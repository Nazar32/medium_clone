import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Placeholdable } from '../common';

const Info = styled(Placeholdable)`
`;

const IconDivider = styled.span`
  margin: 0 4px;
`;

const StoryInfo = ({ skeleton, updated, readTime }) => {
  const formatedReadTime = `${readTime} min read`;
  return (
    <Info placeholder={skeleton ? 1 : 0} minHeight="15px" width="45%">
      {!skeleton && (
        <Typography variant="caption">
          <Moment format="MMM D">
            {updated}
          </Moment>
          <IconDivider>
            .
          </IconDivider>
          <IconDivider>
            &#9733;
          </IconDivider>
          <span>
            {formatedReadTime}
          </span>
        </Typography>
      )}
    </Info>
  );
};
StoryInfo.propTypes = {
  skeleton: PropTypes.bool,
  updated: PropTypes.instanceOf(Date).isRequired,
  readTime: PropTypes.number.isRequired
};
StoryInfo.defaultProps = {
  skeleton: false
};

export default StoryInfo;
