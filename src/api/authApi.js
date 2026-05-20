import axiosClient from "./axiosClient"

export const authApi = {
    login(data) {
        return axiosClient.post("/auth/login", {
            username: data.username,
            password: data.password,
            expiresInMins: 30,
        })
    },

    getMe() {
        return axiosClient.get("/auth/me");
    },

    refreshToken(refreshToken) {
        return axiosClient.post("/auth/refresh", {
            refreshToken,
            expiresInMins: 30,
        });
    },
}