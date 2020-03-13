import { connect } from 'react-redux';
import App from '../components/App';
import { getAppName, isLoading } from '../selectors';
import { fetchAppName } from '../actions';

const mapStateToProps = state => ({
  appName: getAppName(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAppName: () => dispatch(fetchAppName())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
