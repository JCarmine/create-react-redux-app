import React from 'react';
import PropTypes from 'prop-types';
import ChildComponent from './ChildComponent';

import '../styles/index.css';

const App = ({ appName }) => {
  return (
    <div className="app">
      <ChildComponent appName={appName} />
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
