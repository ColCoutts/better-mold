import FieldNoteActionTypes from './field-notes.types';

const INITIAL_STATE = {
  hidden: true
};

const fieldNotesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FieldNoteActionTypes.TOGGLE_FIELD_NOTES_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default fieldNotesReducer;
