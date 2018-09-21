export default function(state={}, action) {
    switch(action.type) {
        case 'GET_POST_COMMENTS':
            return {...state, comments: action.payload}
        case 'GET_COMMENT_DETAILS':

        case 'VOTE_COMMENT':

        case 'EDIT_COMMENT_DETAILS':

        case 'DELETE_COMMENT':
        
        default:
            return state;
    }
} 