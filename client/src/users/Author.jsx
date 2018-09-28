import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography } from '@material-ui/core';
import styled from 'styled-components';

const User = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const UserInfo = styled.div`
  margin-left: 10px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

const Author = ({ firstName, lastName, children }) => {
  const fullName = `${firstName} ${lastName}`;
  const avatarText = firstName[0] + lastName[0];

  return (
    <User>
      <div>
        <Avatar width="60px" height="60px">
          {avatarText}
        </Avatar>
      </div>
      <UserInfo>
        <Typography variant="body2">{fullName}</Typography>
        <div>
          {children}
        </div>
      </UserInfo>
    </User>
  );
};
Author.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  children: PropTypes.node
};
Author.defaultProps = {
  children: null
};

export default Author;
