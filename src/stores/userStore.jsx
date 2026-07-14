import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
    persist(
        (set) => ({
            userId: null,
            user: null,
            token: null,
            setUserId: (userId) => set({ userId }),
            setUser: (user) => set({ user }),
            setToken: (token) => set({ token }),
            logout: () => set({ userId: null, user: null, token: null })
        }),
        {
            name: "user-store"
        }
    )
)