export const fetchDataFromApi = (pathname) => {
  return dispatch => {
    fetch('http://localhost:3001' + pathname, {method: 'GET'})
      .then(res => res.json())
      .then(res => dispatch({data: res, type: 'SET_ROUTE_PROPS'}))
      .catch((err) => console.error(err));
  }
};

export const postFormData = (pathname, formKey) => {
  return dispatch => dispatch({
    pathname,
    formKey,
    type: 'POST_FORM_DATA',
  });
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
