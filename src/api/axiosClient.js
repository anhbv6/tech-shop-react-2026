import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message =
        error.response?.data?.message || "Something went wrong";

        return Promise.reject({
        message,
        status: error.response?.status,
        data: error.response?.data,
        });
    }
);

export default axiosClient;