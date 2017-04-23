import { createStore, combineReducers } from 'redux';
import { SortReducer, UpdateVoteReducer } from './reducer';
// import reduxLogger from 'redux-logger'


const store = createStore(
    combineReducers({
        UpdateVoteReducer,
        SortReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;
