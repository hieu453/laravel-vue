<template>
  <main-content>
    <!-- Modal -->
    <transition>
      <edit-modal
        :isOpen="isOpenEdit"
        :loading="loading"
        @close-modal="closeEditModal"
        @update="update"
      >
        <h1>Edit category</h1>
        <form action="" @submit.prevent">
          <div>
            <input type="text" class="border" v-model="form.name" @input="console.log(initialForm)">
          </div>
        </form>
      </edit-modal>
    </transition>
    <transition>
      <delete-modal
        :isOpen="isOpenDelete"
        :loading="loading"
        @close-modal="closeDeleteModal"
        @delete="destroy"
      >
        You want to delete?
      </delete-modal>
    </transition>
    <transition>
      <create-modal
        :isOpen="isOpenCreate"
        :loading="loading"
        @close-modal="closeCreateModal"
        @store="store"
      >
        <h1>Create category</h1>
        <form action="">
          <div>
            <input type="text" class="border" v-model="form.name">
          </div>
        </form>
      </create-modal>
    </transition>
    <!-- End modal -->

    <div class="mb-20 flex justify-between">
      <h1 class="text-lg uppercase font-bold text-blue-300">Categories</h1>
      <custom-button class="bg-blue-600 hover:bg-blue-500" @click="isOpenCreate = true">Create category</custom-button>
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
            <tr v-if="categories.length" v-for="category in categories" :key="category.id">
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
                    @click="openDeleteModal(category.id)"
                    href="#"
                    class="block text-red-400 font-sans text-sm antialiased font-medium leading-normal"
                  >
                    Delete
                  </a>
                </div>
              </td>
            </tr>
            <tr v-else class="text-center">
              <td colspan="5">No records</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main-content>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MainContent from '../layouts/MainLayout.vue';
import { api } from '@/plugin/axios';
import EditModal from '@/components/EditModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import { useToast } from 'vue-toastification';
import CustomButton from '@/components/Button.vue';
import CreateModal from '@/components/CreateModal.vue';

const initialForm = {
  name: ''
}

const categories = ref([]);
const isOpenCreate = ref(false)
const isOpenEdit = ref(false);
const isOpenDelete = ref(false);
const loading = ref(false);

const form = ref({...initialForm})

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
  isOpenEdit.value = true;

  form.value = {...(categories.value.find(category => category.id === categoryId))} // Copy element, because returned element is object (points to the same localtion in memory)
}

const openDeleteModal = async (categoryId) => {
  isOpenDelete.value = true;

  form.value = {...(categories.value.find(category => category.id === categoryId))} // The same above
}

const store = async () => {
  try {
    loading.value = true

    await api.post('/api/categories', {
      name: form.value.name
    })
    const response = await api.get('/api/categories')

    isOpenCreate.value = false;
    loading.value = false;
    categories.value = response.data
    form.value = {...initialForm}

    toast.success('Category created')
  } catch (error) {
    toast.error(`Err: ${error.message}`)
  }

}

const update = async () => {
  try {
    loading.value = true;

    await api.put(`/api/categories/${form.value.id}`, {
      name: form.value.name,
    });
    const response = await api.get('/api/categories')

    isOpenEdit.value = false;
    loading.value = false;
    categories.value = response.data
    form.value = {...initialForm}

    toast.success('Category updated')
  } catch (error) {
    toast.error(`Error: ${error.message}`)
  }
}

const destroy = async () => {
  try {
    loading.value = true;

    await api.delete(`/api/categories/${form.value.id}`)
    const response = await api.get('/api/categories')

    isOpenDelete.value = false;
    loading.value = false;
    categories.value = response.data
    form.value = {...initialForm}

    toast.success('Category deleted');
  } catch (error) {
    toast.error(`Error: ${error.message}`)
  }
}

const closeCreateModal = () => {
  isOpenCreate.value = false;

  form.value = {...initialForm}
}

const closeEditModal = () => {
  isOpenEdit.value = false;

  form.value = {...initialForm}
}

const closeDeleteModal = () => {
  isOpenDelete.value = false;

  form.value = {...initialForm}
}
</script>
