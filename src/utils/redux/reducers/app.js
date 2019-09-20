import {fromJS} from 'immutable';


const setAppProperties = (state, attribute = [], data) => {
  return state.setIn(['app'].push(attribute), fromJS(data));
};

const setAttrProps = (state, attribute = [], data) => {
  return state.setIn(['app', 'values'].concat(attribute), fromJS(data));
};

const setAttrFormProps = (state, attribute = [], data, formKey) => {
  return state.setIn(['form'].concat(formKey, attribute), fromJS(data));
};

const postFormData = (state, data) => {
  return state.withMutations((mutableState) => {
    if (data.hasOwnProperty('isLogged')) {
      mutableState.setIn(['isLogged'], data.isLogged);
      delete data.isLogged;
    }
    mutableState.setIn(['app', 'route'], fromJS(data));
  });
};

const getRouteData = (state, data) => {
  return state.withMutations((mutableState) => {
    if (data.hasOwnProperty('isLogged')) {
      mutableState.setIn(['isLogged'], fromJS(data.isLogged));
      delete data.isLogged;
    }
    mutableState.setIn(['form', 'response'], fromJS(data));
  });
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
      return postFormData(state, action.data);
    case 'GET_ROUTE_DATA':
      return getRouteData(state, action.data);
    default:
      return state;
  }
};
