import { connect } from 'react-redux';
import App from 'components/App';
import { getName, isLoading, hasError } from 'selectors';
import { fetchData } from 'actions';

const mapStateToProps = state => ({
  name: getName(state),
  isLoading: isLoading(state),
  hasError: hasError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
