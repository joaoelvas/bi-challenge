import axios from 'axios';

export function getCategories() {
    const req = axios.get(`http://localhost:3001/categories`, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'GET_CATEGORIES',
        payload: req
    }
}

export function getPostByCategory(category) {
    const req = axios.get(`http://localhost:3001/${category}/posts`, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'GET_POSTS_BY_CATEGORY',
        payload: req
    }
}

export function getPosts() {
    const req = axios.get(`http://localhost:3001/posts`, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'GET_POSTS',
        payload: req
    }
}

export function addPost(post) {
    const req = axios.post(`http://localhost:3001/posts`, post, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'ADD_POST',
        payload: req
    }
}

export function getPostDetails(id) {
    const req = axios.get(`http://localhost:3001/posts/${id}`, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'GET_POST_DETAILS',
        payload: req
    }
}

export function votePost(id, option = "upVote") {
    const req = axios.post(`http://localhost:3001/posts/${id}`,{'option': option}, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'VOTE_POST',
        payload: req
    }
}

export function editPost(id, post) {
    const req = axios.put(`http://localhost:3001/posts/${id}`, post, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'EDIT_POST',
        payload: req
    }
}

export function deletePost(id) {
    const req = axios.put(`http://localhost:3001/posts/${id}`, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'DELETE_POST',
        payload: req
    }
}

export function getPostComments(id) {
    const req = axios.get(`http://localhost:3001/posts/${id}/comments`, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'GET_POST_COMMENTS',
        payload: req
    }
}

export function getCommentDetails(id) {
    const req = axios.get(`http://localhost:3001/comments/${id}`, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'GET_COMMENT_DETAILS',
        payload: req
    }
}

export function voteComment(id, option = "upVote") {
    const req = axios.post(`http://localhost:3001/comments/${id}`, {'option':option}, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'VOTE_COMMENT',
        payload: req
    }
}

export function editCommentDetails(id) {
    const req = axios.put(`http://localhost:3001/comments/${id}`, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'EDIT_COMMENT_DETAILS',
        payload: req
    }
}

export function deleteComment(id) {
    const req = axios.delete(`http://localhost:3001/comments/${id}`, {
        headers: {
            'Authorization': 'hello',
        }
    }).then(res => res.data);

    return {
        type: 'DELETE_COMMENT',
        payload: req
    }
}
