export default function(state={}, action) {
    switch(action.type) {
        case 'GET_CATEGORIES':
            return {...state, categories: action.payload.categories}
        case 'GET_POSTS':
            return {...state, posts: action.payload}
        case 'GET_POST_DETAILS':
            return {...state, post: action.payload}
        case 'GET_POST_COMMENTS':
            return {...state, comments: action.payload}
        default:
            return state;
    }
} 