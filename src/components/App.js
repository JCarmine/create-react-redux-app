import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/react-redux-logo.png';
import loadingIndicator from '../images/loading-indicator.gif';

import '../styles/App.css';

const App = ({ appName, fetchAppName, isLoading }) => {
  return (
    <div className="app">
      <h1 className="app-title">{appName}</h1>
      <div className="image-container">
        <img className="get-started-logo" src={logo} alt="Get Started Logo" />
        {isLoading && <img className="loading-indicator" src={loadingIndicator} alt="" />}
      </div>
      <button 
        className="get-name-button" 
        onClick={fetchAppName}>
          Get App Name
      </button>
    </div>
  );
};

// App.defaultProps = {
//   data: null
// };

App.propTypes = {
  appName: PropTypes.string.isRequired
};

export default App;
