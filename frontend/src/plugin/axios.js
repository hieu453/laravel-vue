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

const defaultAxios = axios.create();

export { api, defaultAxios };