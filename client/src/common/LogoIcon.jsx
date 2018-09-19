import React from 'react';
import PropTypes from 'prop-types';

const LogoIcon = ({ width, height }) => (
  <img
    width={width}
    height={height}
    alt="Medium"
    src="./medium.svg"
  />
);
LogoIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};
LogoIcon.defaultProps = {
  width: '20px',
  height: '20px'
};

export default LogoIcon;
