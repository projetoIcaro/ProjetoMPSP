// export const setInitProps = data => ({
//   data: data,
//   type: 'SET_INIT_PROPS',
// });

export const fetchDataFromApi = (pathname) => {
  return dispatch => {
    fetch('http://localhost:5000' + pathname)
      .then(res => res.json())
      .then(res => dispatch({data: res, type: 'SET_ROUTE_PROPS'}))
      .catch((err) => console.error(err));
  }
};
