import { connect } from 'react-redux';
import App from '../components';
import { getAppName } from '../selectors';
import { fetchAppName } from '../actions';

const mapStateToProps = state => ({
  appName: getAppName(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAppName: () => dispatch(fetchAppName())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
