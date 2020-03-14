import { fromJS } from 'immutable';

const initialState = fromJS({
  data: null,
  loading: false,
  error: false
});

export default initialState;
