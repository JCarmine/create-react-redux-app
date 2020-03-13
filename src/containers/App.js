import { connect } from 'react-redux';
import App from '../components/App';
import { getData, isLoading, hasError } from '../selectors';
import { fetchData } from '../actions';

const mapStateToProps = state => ({
  data: getData(state),
  isLoading: isLoading(state),
  hasError: hasError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
