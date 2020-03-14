export const getName = state => {
  const data = state.getIn(['data', 'results']);

  if (data) {
    return data.get(0).get('name').toJS();
  }
}

export const isLoading = state => state.get('loading');

export const hasError = state => state.get('error');
