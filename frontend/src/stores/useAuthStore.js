import { api } from "@/plugin/axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const user = ref(
        JSON.parse(localStorage.getItem('user')) ?? {
            loggedIn: false,
            data: null,
        }
    )
    const isAuthenticated = computed(() => user.value.loggedIn)

    const login = async (credentials) => {
        await api.get('/sanctum/csrf-cookie')
        await api.post('/api/login', credentials)
        const response = await api.get('/api/user')
        
        localStorage.setItem('user', JSON.stringify({
            loggedIn: true,
            data: response.data
        }))

        user.value = JSON.parse(localStorage.getItem('user'))
    }

    const logout = async () => {
        await api.post('/api/logout');
        localStorage.removeItem('user');
        user.value = {
            loggedIn: false,
            data: null,
        }
    }
    
    return { user, login, logout, isAuthenticated };
})