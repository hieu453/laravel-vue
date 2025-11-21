<template>
  <div class="flex">
    <sidebar :auth-store="authStore" />
    <div class="w-full bg-gray-100">
      <div class="mt-10 pl-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/useAuthStore';
import Sidebar from './Sidebar.vue';

const authStore = useAuthStore();
</script>
