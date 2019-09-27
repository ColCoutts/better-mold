import AboutActionTypes from './about.types';

const INITIAL_STATE = {
  hidden: true
};

const aboutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AboutActionTypes.TOGGLE_ABOUT_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default aboutReducer;
