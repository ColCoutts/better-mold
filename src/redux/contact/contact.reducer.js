import ContactActionTypes from './contact.types';

const INITIAL_STATE = {
  hidden: true
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ContactActionTypes.TOGGLE_CONTACT_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
}

export default contactReducer;
