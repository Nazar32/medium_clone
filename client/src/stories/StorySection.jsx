import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StoryItem from './StoryItem';

const Section = styled.section`
  margin: 15px auto;
  max-width: 700px;
`;

const StorySection = ({ items }) => (
  <Section>
    {items.map(({ id, variant, content }) => (
      <StoryItem key={id} variant={variant} content={content} />
    ))}
  </Section>
);
StorySection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }))
};
StorySection.defaultProps = {
  items: []
};

export default StorySection;
