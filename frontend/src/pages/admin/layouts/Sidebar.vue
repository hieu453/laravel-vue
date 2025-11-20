<template>
    <div class="w-1/3">
        <div class="p-4 transition bg-purple-300 hover:cursor-pointer">
            <h1 class="text-2xl">Dashboard</h1>
        </div>
        <div class="p-4 transition hover:bg-purple-500 hover:cursor-pointer">
            <h1 class="text-lg">Categories</h1>
        </div>
        <div class="p-4 transition hover:bg-purple-500 hover:cursor-pointer">
            <h1 class="text-lg">Products</h1>
        </div>
        <div class="p-4">
            <button @click="logout"
                class="border border-purple-300 p-2 transition rounded hover:cursor-pointer hover:bg-purple-300">
                Logout
            </button>
            <div class="">
                <div>
                    <span>Name: {{ authStore.user.name }}</span>
                </div>
                <div>
                    <span>Email: {{ authStore.user.email }}</span>
                </div>
                <div>
                    <span>Id: {{ authStore.user.id }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/useAuthStore';
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();

const router = useRouter()

const logout = async () => {
    await authStore.logout();
    router.push({ name: 'home' })
}
</script>
