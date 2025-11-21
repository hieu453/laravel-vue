<template>
  <router-link
    :to="to"
    :class="['block transition rounded-md', hoverColor]"
  >
    <div class="px-6 py-4 shadow-lg border-gray-50 rounded-md">
      <div class="flex gap-6 items-center">
        <div
          :class="['flex justify-center rounded-xl w-16 h-14 items-center', hoverColor, bgColor]"
        >
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 16 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4" />
          </svg>
        </div>
        <div>
          <div><span class="text-gray-500 font-medium underline">{{ text }}</span>
          </div>
          <div><span class="text-2xl font-bold"></span></div>
        </div>
      </div>
      <div class="mt-2"><span :class="['font-medium', linkColor]">View all</span></div>
    </div>
  </router-link>
</template>

<script setup>
defineProps([
  'to',
  'text',
  'hoverColor',
  'linkColor',
  'bgColor',
])
</script>
