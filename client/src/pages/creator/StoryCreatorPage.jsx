import React from 'react';
import { Typography } from '@material-ui/core';
import GenericPage from '../generic/GenericPage';
import StoryCreatorNav from './StoryCreatorNav';
import { AuthRequired } from '../../authentication';
import { UserDescription } from '../../users';
import { StoryEditor } from '../../stories';
import './StoryCreatorPage.scss';

const StoryCreator = () => (
  <AuthRequired>
    <GenericPage navBar={(<StoryCreatorNav />)}>
      <article className="article">
        <header className="article_header">
          <UserDescription />
        </header>
        <div className="article_content">
          <StoryEditor />
        </div>
        <footer className="article_footer">
          <Typography variant="caption">Sample footer</Typography>
        </footer>
      </article>
    </GenericPage>
  </AuthRequired>
);

export default StoryCreator;
