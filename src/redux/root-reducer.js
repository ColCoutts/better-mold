import { combineReducers } from 'redux';
import workReducer from './work/work.reducer';
import aboutReducer from './about/about.reducer';

const rootReducer = combineReducers({
  work: workReducer,
  about: aboutReducer
});

export default rootReducer;
