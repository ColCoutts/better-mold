import { createSelector } from 'reselect';

const selectPage = state => state.page;

export const selectPageHidden = createSelector(
  [selectPage],
  page => page.hidden
);
