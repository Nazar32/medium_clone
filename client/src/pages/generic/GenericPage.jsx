import React from 'react';
import PropTypes from 'prop-types';
import './page.scss';

const GenericPage = ({ navBar, children, footer }) => (
  <div className="webPage">
    {navBar}
    <div className="webPage_content">
      {children}
    </div>
    <div className="webPage_footer">
      {footer}
    </div>
  </div>
);
GenericPage.propTypes = {
  navBar: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.element
};
GenericPage.defaultProps = {
  footer: null
};

export default GenericPage;
