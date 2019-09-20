const apiURL = 'http://localhost:3001';

export const fetchDataFromApi = (pathname) => {
  return dispatch => {
    fetch('http://localhost:3001' + pathname, {credentials: 'include', method: 'GET'})
      .then(res => res.json())
      .then(res => dispatch({data: res, type: 'GET_ROUTE_DATA'}))
      .catch((err) => console.error(err));
  }
};

export const postFormData = (formData, pathname) => {
  return dispatch => {
    fetch(apiURL + pathname, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(res => dispatch({data: res, type: 'POST_FORM_DATA'}))
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
