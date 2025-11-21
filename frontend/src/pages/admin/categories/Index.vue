<template>
  <main-content>
    <transition>
      <edit-modal
        :isOpen="isOpenEdit"
        @close-modal="isOpenEdit = false"
        @update="update"
      >
        <h1>Edit category</h1>
        <form action="">
          <div>
            <input type="text" class="border" v-model="form.name">
          </div>
        </form>
      </edit-modal>
    </transition>
    <div class="mb-20">
      <h1 class="text-lg uppercase font-bold text-blue-300">Categories</h1>
    </div>
    <div>
      <div
        class="flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table class="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th class="p-4 border-b border-gray-300 bg-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-gray-900">
                  Id
                </p>
              </th>
              <th class="p-4 border-b border-gray-300 bg-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-gray-900">
                  Name
                </p>
              </th>
              <th class="p-4 border-b border-gray-300 bg-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-gray-900">
                  Created at
                </p>
              </th>
              <th class="p-4 border-b border-gray-300 bg-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-gray-900">
                  Updated at
                </p>
              </th>
              <th class="p-4 border-b border-gray-300 bg-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-gray-900">
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories">
              <td class="p-4 border-b border-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-900">
                  {{ category.id }}
                </p>
              </td>
              <td class="p-4 border-b border-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-900">
                  {{ category.name }}
                </p>
              </td>
              <td class="p-4 border-b border-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-900">
                  {{ category.created_at }}
                </p>
              </td>
              <td class="p-4 border-b border-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-900">
                  {{ category.updated_at }}
                </p>
              </td>
              <td class="p-4 border-b border-gray-50">
                <div class="flex items-center gap-4">
                  <a
                    @click="openEditModal(category.id)"
                    href="#"
                    class="block text-blue-400 font-sans text-sm antialiased font-medium leading-normal"
                  >
                    Edit
                  </a>
                  <a
                    @click=""
                    href="#"
                    class="block text-red-400 font-sans text-sm antialiased font-medium leading-normal"
                  >
                    Delete
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main-content>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import MainContent from '../layouts/MainLayout.vue';
import { api } from '@/plugin/axios';
import EditModal from '@/components/EditModal.vue';
import { useToast } from 'vue-toastification';

const categories = ref();
const isOpenEdit = ref(false);
const loading = ref(false);

const form = ref()

const toast = useToast();

onMounted(async () => {
  try {
    loading.value = true
    const response = await api.get('/api/categories')
    categories.value = response.data
    loading.value = false;
  } catch (error) {
    loading.value = false
  }
})

const openEditModal = async (categoryId) => {
  const response = await api.get(`/api/categories/${categoryId}`);
  form.value = response.data
  isOpenEdit.value = true;
}

const update = async () => {
  try {
    await api.put(`/api/categories/${form.value.id}`, {
      name: form.value.name,
    });
    const response = await api.get('/api/categories')

    isOpenEdit.value = false;
    categories.value = response.data

    toast.success('Category updated')
  } catch (error) {
    toast.error(`Error: ${error.message}`)
  }
}
</script>
