import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/react-redux-logo.png';

import '../styles/ChildComponent.css';

const ChildComponent = ({ appName }) => {
  return (
    <div className="ChildComponent">
      <h1>{appName}</h1>
      <img className="get-started-logo" src={logo} alt="Get Started Logo" />
    </div>
  );
};

// ChildComponent.defaultProps = {
//   appName: null
// };

ChildComponent.propTypes = {
  appName: PropTypes.string.isRequired
};

export default ChildComponent;