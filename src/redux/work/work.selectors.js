import { createSelector } from 'reselect';

const selectWork = state => state.work;

export const selectWorkHidden = createSelector(
  [selectWork],
  work => work.hidden
);
