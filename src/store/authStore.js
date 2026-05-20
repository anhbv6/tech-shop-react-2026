import { create } from "zustand";
import { authApi } from "../api/authApi";

const savedAccessToken = localStorage.getItem("accessToken");

export const useAuthStore = create((set, get) => ({
    loading: false,
    err: "",
    isAuthenticated: !!savedAccessToken,

    login: async (payload) => {
        try {
            set({
                loading: true,
                err: "",
            })

            const data = await authApi.login(payload);

            console.log("data", data);
        } catch (err) {
            set({
                loading: false,
                err: err.message || "Login failed",
            });

            throw error;
        }
    }
}))