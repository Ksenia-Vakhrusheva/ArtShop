import { defineStore } from "pinia";



export const useUserStore = defineStore('user', {
    state: () => ({
        id: '',
        name: '',
        email: '',
        api_token: '',
        isLoggedIn: null,
    }),
    actions: {
    },
    persist: true,
})