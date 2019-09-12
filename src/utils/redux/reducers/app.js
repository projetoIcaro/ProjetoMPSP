import { fromJS } from 'immutable';

// const initialState = fromJS({
//   'app': {},
// });

const setAppProperties = (state, attribute = null, data) => {
  return state.setIn(['app'].push(attribute), fromJS(data));
};

export const app = (state, action = null) => {
  switch(action.type) {
    case 'SET_INIT_PROPS':
      return null;
    case 'SET_APP_PROPS':
      return setAppProperties(state, action.attribute, action.data);
    default:
      return state;
  }
};
