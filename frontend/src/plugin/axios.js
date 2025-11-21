import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        common: {
            'X-Requested-With': 'XMLHttpRequest',
        },
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

api.interceptors.response.use(function onRejected(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, async function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.status == 419) {
        await api.get('/sanctum/csrf-cookie')
        const res = await api.request(error.config)

        if (res.status == 422) {
            // Reject to api instance .catch(e)
            return Promise.reject(res)
        }
    }
    return Promise.reject(error);
});

const defaultAxios = axios.create();

export { api, defaultAxios };
