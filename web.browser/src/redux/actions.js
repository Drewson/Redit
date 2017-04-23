export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SORT_BY_UPVOTE = 'SORT_BY_UPVOTE';
export const UPDATE_VOTE = 'UPDATE_VOTE';

export const sortByDate = filterType => ({ type: SORT_BY_DATE, filterType });
export const sortByUpvotes = filterType => ({ type: SORT_BY_UPVOTE, filterType });
export const updateVote = id => ({ type: UPDATE_VOTE, id });
