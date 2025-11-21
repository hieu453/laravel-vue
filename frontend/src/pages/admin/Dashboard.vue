<template>
  <main-layout>
    <div class="mb-20">
      <h1 class="text-lg uppercase font-bold text-blue-300">Welcome to dashboard</h1>
    </div>
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-4 flex flex-col gap-2">
        <card-link
          :to="{ name: 'categories.index' }"
          text="Total categories"
          hover-color="hover:bg-purple-300"
          link-color="text-purple-600"
          bg-color="bg-purple-300"
        />
        <card-link
          :to="{ name: 'products.index' }"
          text="Total products"
          hover-color="hover:bg-blue-300"
          link-color="text-blue-600"
          bg-color="bg-blue-300"
        />
        <card-link
          :to="{ name: 'users.index' }"
          text="Total users"
          hover-color="hover:bg-green-300"
          link-color="text-green-600"
          bg-color="bg-green-300"
        />
      </div>
    </div>
  </main-layout>
</template>

<script setup>
import MainLayout from './layouts/MainLayout.vue';
import CardLink from '@/components/CardLink.vue';
</script>
