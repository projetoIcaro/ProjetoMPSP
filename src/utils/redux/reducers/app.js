import {fromJS} from 'immutable';

const apiURL = 'http://localhost:3001';

const setAppProperties = (state, attribute = [], data) => {
  return state.setIn(['app'].push(attribute), fromJS(data));
};

const setAttrProps = (state, attribute = [], data) => {
  return state.setIn(['app', 'values'].concat(attribute), fromJS(data));
};

const setAttrFormProps = (state, attribute = [], data, formKey) => {
  return state.setIn(['form'].concat(formKey, attribute), fromJS(data));
};

const setApiExtractionData = (state, apiName, data) => {
  return state.setIn(['extraction'].concat(apiName), fromJS(data));
};

const cleanExtractionData = (state) => {
  return state.setIn(['extraction'], fromJS({}));
};

const postFormData = (state, pathname, formKey) => {
  const formData = state.getIn(['form', formKey]);
  fetch(apiURL + pathname, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch((err) => console.error(err));
  return state;
};

export const app = (state, action = null) => {
  switch(action.type) {
    case 'SET_APP_PROPS':
      return setAppProperties(state, action.attribute, action.data);
    case 'SET_ATTR_PROPS':
      return setAttrProps(state, action.attribute, action.data);
    case 'SET_ATTR_FORM_PROPS':
      return setAttrFormProps(state, action.attribute, action.data, action.formKey);
    case 'POST_FORM_DATA':
      return postFormData(state, action.pathname, action.formKey);
    case 'SET_API_EXTRACTION_PROPS':
      return setApiExtractionData(state, action.apiName, action.data);
    case 'CLEAN_EXTRACTION_DATA':
      return cleanExtractionData(state);
    default:
      return state;
  }
};
