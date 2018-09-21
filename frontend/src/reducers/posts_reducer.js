export default function(state={}, action) {
    switch(action.type) {
        case 'GET_CATEGORIES':
            return {...state, categories: action.payload.categories}
        case 'GET_POSTS_BY_CATEGORY':
            return {...state, posts: action.payload}
        case 'GET_POSTS':
            return {...state, posts: action.payload}
        case 'GET_POST_DETAILS':
            return {...state, post: action.payload}
        case 'ADD_POST':
        
        case 'VOTE_POST':

        case 'EDIT_POST':

        case 'DELETE_POST':

        default:
            return state;
    }
} 