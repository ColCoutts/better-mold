import PageActionTypes from './page.types';

const INITIAL_STATE = {
  hidden: true
};

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PageActionTypes.TOGGLE_PAGE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default pageReducer;
