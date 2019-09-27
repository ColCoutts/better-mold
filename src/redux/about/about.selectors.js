import { createSelector } from 'reselect';

const selectAbout = state => state.about;

export const selectAboutHidden = createSelector(
  [selectAbout],
  about => about.hidden
);
