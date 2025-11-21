<template>
  <div class="w-1/3 overflow-scroll min-h-screen">
    <profile-info :user-info="authStore.user" />
    <sidebar-menu-item />
    <div class="mt-2 mb-16 flex justify-center">
      <custom-button @click="logout"
        class="bg-purple-600 hover:bg-purple-500">
        Logout
      </custom-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import ProfileInfo from './ProfileInfo.vue';
import SidebarMenuItem from './SidebarMenuItem.vue';
import { useAuthStore } from '@/stores/useAuthStore';
import CustomButton from '@/components/Button.vue';

const authStore = useAuthStore();

const router = useRouter()

const logout = async () => {
  await authStore.logout();
  router.push({ name: 'home' })
}
</script>
