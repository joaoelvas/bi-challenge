import { combineReducers } from 'redux';
import comments from './comments_reducer';
import posts from './posts_reducer';

const rootReducer = combineReducers({
    posts,
    comments
}) 

export default rootReducer;