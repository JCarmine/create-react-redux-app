export const getAppName = state => {
  const appName = state.get('name');
  if (appName) {
    return appName;
  }
}

export const isLoading = state => state.get('loading');

export const hasError = state => state.get('error');
