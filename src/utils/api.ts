import axios, { AxiosRequestHeaders } from "axios";

const apiUrl = import.meta.env.VITE_BASE_URL

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        accept: "*/*",
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    async (config) => {
        const result = localStorage.getItem("accessToken")
        config.headers = { ...config.headers } as AxiosRequestHeaders;
        if (result) {
            config.headers["Authorization"] = `Bearer ${result}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api