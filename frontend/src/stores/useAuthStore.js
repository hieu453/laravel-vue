import { api } from "@/plugin/axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const user = ref(
        JSON.parse(localStorage.getItem('user')) ?? {
            loggedIn: false,
        }
    )
    const isAuthenticated = computed(() => user.value.loggedIn)

    const login = async (credentials) => {
        await api.get('/sanctum/csrf-cookie')
        await api.post('/api/login', credentials)
        try {
            const response = await api.get('/api/user')
            localStorage.setItem('user', JSON.stringify({
                loggedIn: true,
                ...response.data,
            }))
    
            user.value = JSON.parse(localStorage.getItem('user'))
        } catch (e) {
            console.log(e)
        }
        
    }

    const logout = async () => {
        await api.post('/api/logout');
        localStorage.removeItem('user');
        user.value = {
            loggedIn: false,
        }
    }
    
    return { user, login, logout, isAuthenticated };
})