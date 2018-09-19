import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import './UserDescription.scss';

const UserDescription = () => (
  <div className="user">
    <div className="avatar">
      <Avatar>
        NS
      </Avatar>
    </div>
    <div className="info">
      <Typography variant="body2">Name Surname</Typography>
      <Typography variant="caption">Draft</Typography>
    </div>
  </div>
);

export default UserDescription;
