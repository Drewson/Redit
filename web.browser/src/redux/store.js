import { createStore, combineReducers } from 'redux';
import { SortReducer, PostsReducer } from './reducer';
// import reduxLogger from 'redux-logger'



const store = createStore(
    combineReducers({
        posts: PostsReducer,
        weeks: SortReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;
