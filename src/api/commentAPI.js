import config from './config';

const commentAPI = {
    getComments() {
        return config.createRequest(`/comments/`, 'GET').then(res => res.json());
    },
}

export default commentAPI;