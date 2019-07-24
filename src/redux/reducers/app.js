export const app = (state = {}, action) => {
  switch(action.type) {
    case 'SET_INIT_PROPS':
      // console.log(state);
      return {
        ...state,
        app: {
          ...action.data,
        }
      };
    case 'SET_ROUTE_PROPS':
      // console.log(state);
      return {
        ...state,
        route: {
          ...action.data,
        }
      };
    default:
      return state;
  }
};
