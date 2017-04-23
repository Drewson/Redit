import { data } from '../mock-data';
import {
    SORT_BY_DATE,
    SORT_BY_UPVOTE,
    UPDATE_VOTE
} from './actions';

export function UpdateVoteReducer(state = data.posts, action) {
  switch (action.type) {
      case UPDATE_VOTE:
        return state.map(post => post.id === action.id && ( //ITS IMPURE!
                post.votes += 1
            ));
      default:
        return state;
    }
}

export function SortReducer(state = data, action) {
  switch (action.type) {
      case SORT_BY_DATE:
        return state;
      case SORT_BY_UPVOTE:
        return state;
      default:
        return state;
    }
}

// updateVote( postId ){
//     this.state.posts.map( (post) => postId === post.id && (
//         post.votes += 1
//     ));

//     this.forceUpdate();
// }

// sortByDate( posts ){
//     let sortedList = posts.sort( function(a, b ){
//         return b.id - a.id;
//     });
//     this.setState( {
//         orderby: 'newest',
//         posts : sortedList
//     } )
// }

// sortByUpvotes( posts ){
//     let sortedList = posts.sort( function(a, b ){
//         return b.votes - a.votes;
//     });
//     this.setState( {
//         orderby: 'newest', posts : sortedList
//     } )
// }
