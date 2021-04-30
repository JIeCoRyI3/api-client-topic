import config from './config';

const userAPI = {
    getUsers() {
        return config.createRequest(`/users/`, 'GET').then(res => res.json());
    },
}

export default userAPI;