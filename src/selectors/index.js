export const getAppName = state => {
  const appName = state.get('name');
  if (appName) {
    return appName;
  }
}

export const isLoading = state => state.getIn('loading');

export const hasError = state => state.getIn('error');
