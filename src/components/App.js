import React from 'react';
import PropTypes from 'prop-types';
import logo from 'images/react-redux-logo.png';
import loadingIndicator from 'images/loading-indicator.gif';

import 'styles/App.css';

const App = ({ name, isLoading, hasError, fetchData }) => {
  return (
    <div className="app">
      <h1 className="app-title">
        {hasError 
          ? 'Error loading data from API.'
          : (name && name.last) || 'Create React Redux App'
        }
      </h1>
      <div className="image-container">
        <img className="get-started-logo" src={logo} alt="Get Started Logo" />
        {isLoading && <img className="loading-indicator" src={loadingIndicator} alt="" />}
      </div>
      <button 
        className="get-data-button"
        disabled={isLoading}
        onClick={fetchData}>
          Get Data
      </button>
    </div>
  );
};

App.defaultProps = {
  data: null
};

App.propTypes = {
  data: PropTypes.object
};

export default App;
