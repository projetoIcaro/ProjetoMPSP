// TODO: QUANDO ARRUMAR A API, ARRUMAR ESSAS ACTIONS TB


export const setInitProps = data => ({
  type: 'SET_INIT_PROPS',
  app: data,
});

export const fetchDataFromApi = (pathname) => {
  return dispatch => {
    fetch('http://localhost:5000' + pathname)
      .then(res => res.json())
      .then(res => dispatch({type: 'SET_ROUTE_PROPS', data: res}));
  }
};
