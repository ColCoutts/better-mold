import { createSelector } from 'reselect';

const selectFieldNotes = state => state.fieldNotes;

export const selectFieldNotesHidden = createSelector(
  [selectFieldNotes],
  fieldNotes => fieldNotes.hidden
);
