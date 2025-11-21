<template>
  <div class="flex">
    <sidebar />
    <div class="w-full bg-gray-100">
      <div class="mt-10 pl-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
</script>
