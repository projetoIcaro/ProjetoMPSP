import {fromJS} from 'immutable';

// const initialState = fromJS({
//   'app': {},
// });

const setAppProperties = (state, attribute = [], data) => {
  return state.setIn(['app'].push(attribute), fromJS(data));
};

const setAttrProps = (state, attribute = [], data) => {
  return state.setIn(['app', 'values'].concat(attribute), fromJS(data));
};

const setAttrFormProps = (state, attribute = [], data, formKey) => {
  return state.setIn(['form'].concat(formKey, attribute), fromJS(data));
};

export const app = (state, action = null) => {
  switch(action.type) {
    case 'SET_INIT_PROPS':
      return null;
    case 'SET_APP_PROPS':
      return setAppProperties(state, action.attribute, action.data);
    case 'SET_ATTR_PROPS':
      return setAttrProps(state, action.attribute, action.data);
    case 'SET_ATTR_FORM_PROPS':
      return setAttrFormProps(state, action.attribute, action.data, action.formKey);
    default:
      return state;
  }
};
