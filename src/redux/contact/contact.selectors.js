import { createSelector } from 'reselect';

const selectContact = state => state.contact;

export const selectContactHidden = createSelector(
  [selectContact],
  contact => contact.hidden
);
