import { create } from "zustand";

export const useRouterStore = create((set) => ({
    currentRoute: "/",
    previousRoute: null,

    setRoute: (route) => 
        set((state) => ({
            previousRoute: state.currentRoute,
            currentRoute: route,
        }))
}));