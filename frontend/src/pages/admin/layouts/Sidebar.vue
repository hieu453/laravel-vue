<template>
  <div class="w-1/3">
    <profile-info :user-info="authStore.user" />
    <sidebar-menu-item />
    <div class="py-2 flex justify-center">
      <p-button @click="logout"
        class="border border-purple-300 p-2 transition rounded hover:cursor-pointer hover:bg-purple-300">
        Logout
      </p-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import ProfileInfo from './ProfileInfo.vue';
import SidebarMenuItem from './SidebarMenuItem.vue';

const props = defineProps(['authStore'])

const router = useRouter()

const logout = async () => {
  await props.authStore.logout();
  router.push({ name: 'home' })
}
</script>
