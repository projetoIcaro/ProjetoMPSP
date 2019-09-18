// export const setInitProps = data => ({
//   data: data,
//   type: 'SET_INIT_PROPS',
// });

export const fetchDataFromApi = (pathname) => {
  return dispatch => {
    fetch('http://localhost:3001' + pathname, {method: 'GET'})
      .then(res => res.json())
      .then(res => dispatch({data: res, type: 'SET_ROUTE_PROPS'}))
      .catch((err) => console.error(err));
  }
};

export const postFormData = (pathname) => {
  return dispatch => {
    fetch('http://localhost:3001' + pathname, {
      credentials: 'include',
      method: 'POST',
      headers: {
        // 'Access-Control-Allow-Origin': 'http://localhost:3001',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: 'admin', password: 'pass'}),
    })
      .then(res => res.json())
      .then(res => dispatch({data: res, type: 'SET_ROUTE_PROPS'}))
      .catch((err) => console.error(err));
  }
};

export const setAttrProps = (attribute, attrValue, formKey) => {
  if (formKey) {
    return dispatch => dispatch({
      attribute,
      formKey,
      data: attrValue,
      type: 'SET_ATTR_FORM_PROPS',
    })
  }
  return dispatch => dispatch({
    attribute,
    data: attrValue,
    type: 'SET_ATTR_PROPS',
  })
};
