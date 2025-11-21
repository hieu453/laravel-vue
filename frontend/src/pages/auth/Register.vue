<template>
  <div>
    <router-link to="/" class="border">Back</router-link>
  </div>
  <transition>
    <div v-if="show" @click.self="show = false"
      class="inset-0 fixed bg-gray-300/80 flex justify-center items-center z-10">
      <form action="" method="POST" @submit.prevent="submit" class="z-20 bg-white p-6 rounded">
        <div class="mb-3">
          <div>
            <label for="">Name:</label>
          </div>
          <input type="text" v-model="form.name" class="border rounded p-2 border-teal-300 bg-teal-100"
            placeholder="Name" />
          <div v-if="errors?.name">
            <span class="text-red-500">{{ errors.name[0] }}</span>
          </div>
        </div>
        <div class="mb-3">
          <div>
            <label for="">Email:</label>
          </div>
          <input type="email" v-model="form.email" class="border rounded p-2 border-teal-300 bg-teal-100"
            placeholder="Email" />
          <div v-if="errors?.email">
            <span class="text-red-500">{{ errors.email[0] }}</span>
          </div>
        </div>
        <div class="mb-3">
          <div>
            <label for="">Password:</label>
          </div>
          <input type="password" v-model="form.password" class="border rounded p-2 border-teal-300 bg-teal-100"
            placeholder="Password" />
          <div v-if="errors?.password">
            <span class="text-red-500">{{ errors.password[0] }}</span>
          </div>
        </div>
        <div class="mb-3">
          <div>
            <label for="">Confirmation:</label>
          </div>
          <input type="password" v-model="form.password_confirmation"
            class="border rounded p-2 border-teal-300 bg-teal-100" placeholder="Confirmation" />
          <div v-if="errors?.password_confirmation">
            <span class="text-red-500">{{ errors.password_confirmation[0] }}</span>
          </div>
        </div>
        <div class="mb-3">
          <button class="border">Register</button>
        </div>
      </form>
    </div>
  </transition>
  <div>
    <h1>hello</h1>
    <button class="border" @click="show = true">Click to show modal</button>
  </div>
</template>

<script setup>
import { api } from '@/plugin/axios';
import { useAuthStore } from '@/stores/useAuthStore';
import getValidationErrors from '@/utils/getValidationErrors';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const errors = ref()

const show = ref(false)

const form = reactive({
  name: null,
  email: null,
  password: null,
  password_confirmation: null,
})

const authStore = useAuthStore();

const submit = async () => {
  try {
    await api.get('/sanctum/csrf-cookie')
    await api.post('/api/register', form)
    await authStore.login({
      email: form.email,
      password: form.password,
    })
    router.push({ name: '/dashboard' })
  } catch (error) {
    errors.value = getValidationErrors(error)
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
