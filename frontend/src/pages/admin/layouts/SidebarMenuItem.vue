<template>
  <hr class="border-2 max-w-2/3 mx-auto rounded-full border-blue-300 my-8" />
  <router-link
      :to="{ name: 'dashboard' }"
      class="text-lg block p-4 transition bg-purple-300 hover:bg-purple-500 hover:cursor-pointer"
    >
      Dashboard
    </router-link>
    <router-link
      :to="{ name: 'categories.index' }"
      class="text-lg block px-4 py-2 transition hover:bg-purple-500 hover:cursor-pointer"
      active-class="bg-purple-500"
    >
        Categories
    </router-link>
    <router-link
      :to="{ name: 'products.index' }"
      class="text-lg px-4 py-2 block transition hover:bg-purple-500 hover:cursor-pointer"
      active-class="bg-purple-500"
    >
      Products
    </router-link>
    <router-link
      :to="{ name: 'users.index' }"
      class="text-lg px-4 py-2 block transition hover:bg-purple-500 hover:cursor-pointer"
      active-class="bg-purple-500"
    >
      Users
    </router-link>
    <hr class="border-2 max-w-2/3 mx-auto rounded-full border-blue-300 my-8" />
</template>
