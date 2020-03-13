export const getData = state => {
  const data = state.get('data');
  if (data) {
    return data;
  }
}

export const isLoading = state => state.get('loading');

export const hasError = state => state.get('error');
