import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], user => user.currentUser); //either list of first argument or can be different args and then the function argument