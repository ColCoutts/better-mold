import { combineReducers } from 'redux';
import workReducer from './work/work.reducer';
import aboutReducer from './about/about.reducer';
import fieldNotesReducer from './field-notes/field-notes.reducer';

const rootReducer = combineReducers({
  work: workReducer,
  about: aboutReducer,
  fieldNotes: fieldNotesReducer
});

export default rootReducer;
