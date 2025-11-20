<template>
    <div>
        <h1>
            hello dashboard
        </h1>
        <button @click="logout" class="border">
            Logout
        </button>
    </div>
</template>

<script setup>
import { api } from '@/plugin/axios';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'vue-router';

const router = useRouter();

const authStore = useAuthStore();
console.log(authStore.isAuthenticated);


const logout = async () => {
    await authStore.logout();
    router.push({ path: '/' })
}

</script>