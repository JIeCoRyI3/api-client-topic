import config from './config';

const postAPI = {
    getPost(id) {
        return config.createRequest(`/posts/${id}`, 'GET').then(res => res.json());
    },

    postPost(data) {
        return config.createRequest(`/posts/`, 'POST', { 'Content-type': 'application/json; charset=UTF-8' }, data).then(res => res.json());
    },

    deletePost(id) {
        return config.createRequest(`/posts/${id}`, 'DELETE').then(res => res.json());
    },

    updatePost(id, data) {
        return config.createRequest(`/posts/${id}`, 'PATCH', { 'Content-type': 'application/json; charset=UTF-8' }, data).then(res => res.json());
    },
}

export default postAPI;