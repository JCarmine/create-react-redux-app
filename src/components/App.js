import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/react-redux-logo.png';

import '../styles/App.css';

const App = ({ appName, fetchAppName, isLoading }) => {
  return (
    <div className="app">
      {isLoading ? 
        <h1>Loading...</h1> :
        <h1 className="appTitle">{appName}</h1>
      }
      <img className="get-started-logo" src={logo} alt="Get Started Logo" />
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
