import WorkActionTypes from './work.types';

const INITIAL_STATE = {
  hidden: true
};

const workReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WorkActionTypes.TOGGLE_WORK_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default workReducer;
