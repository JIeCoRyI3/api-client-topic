const config = {
    apiBase: 'https://jsonplaceholder.typicode.com',

    createRequest(endpoint, method, headers, data) {
        const options = this.createOptions(method, headers, data);

        return fetch(this.apiBase + endpoint, options);
    },

    createOptions(method, headers, data) {
        const options = {};

        if (headers) options.headers = headers;
        if (data) options.body = JSON.stringify(data);
        options.method = method;

        return options;
    },
}

export default config;