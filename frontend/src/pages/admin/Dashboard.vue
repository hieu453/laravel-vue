<template>
    <main-content>
        <div class="mb-10">
            <h1 class="text-lg">Welcome to dashboard</h1>
        </div>
        <div>
            <div class="md:grid md:grid-cols-3 md:gap-4 flex flex-col gap-2">
                <a href=""
                    class="block transition hover:bg-purple-300 rounded-md">
                    <div class="shadow-lg px-6 py-4 border-gray-50 rounded-md">
                        <div class="flex gap-6 items-center">
                            <div class="flex justify-center bg-purple-300 rounded-xl w-16 h-14 items-center">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4" />
                                </svg>
                            </div>
                            <div>
                                <div><span class="text-gray-500 font-medium underline">Total categories</span>
                                </div>
                                <div><span class="text-2xl font-bold"></span></div>
                            </div>
                        </div>
                        <div class="mt-2">
                            <span class="text-purple-600 font-medium">
                                View all
                            </span>
                        </div>
                    </div>
                </a>
                <a href="" class="block transition hover:bg-blue-300 rounded-md">
                    <div class="px-6 py-4 shadow-lg border-gray-50 rounded-md">
                        <div class="flex gap-6 items-center">
                            <div class="flex justify-center bg-blue-300 rounded-xl w-16 h-14 items-center">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4" />
                                </svg>
                            </div>
                            <div>
                                <div><span class="text-gray-500 font-medium underline">Total products</span>
                                </div>
                                <div><span class="text-2xl font-bold"></span></div>
                            </div>
                        </div>
                        <div class="mt-2"><span class="text-blue-600 font-medium">View all</span></div>
                    </div>
                </a>
                <a href="" class="block transition hover:bg-green-300 rounded-md">
                    <div class="px-6 py-4 shadow-lg border-gray-50 rounded-md">
                        <div class="flex gap-6 items-center">
                            <div class="flex justify-center bg-green-300 rounded-xl w-16 h-14 items-center">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4" />
                                </svg>
                            </div>
                            <div>
                                <div><span class="text-gray-500 font-medium underline">Total users</span></div>
                                <div><span class="text-2xl font-bold"></span></div>
                            </div>
                        </div>
                        <div class="mt-2"><span class="text-green-600 font-medium">View all</span></div>
                    </div>
                </a>
            </div>
        </div>
    </main-content>
</template>

<script setup>
import MainContent from './layouts/MainContent.vue';
</script>