<template>
  <button class="border">
    <router-link to="/login">Login</router-link>
  </button>
  <button class="border">
    <router-link to="/register">Register</router-link>
  </button>
</template>

<script setup>
import { api } from '@/plugin/axios';
import { useAuthStore } from '@/stores/useAuthStore';
import { onMounted } from 'vue';

const authStore = useAuthStore();

// console.log(`Logged in: ${authStore.isAuthenticated}`);

</script>
