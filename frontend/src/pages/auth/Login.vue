<template>
  <router-link to="/" class="border">Back</router-link>
  <form action="" @submit.prevent="login">
    <div class="mb-3">
      <div>
        <label for="">Email:</label>
      </div>
      <div>
        <input type="email" v-model="form.email" class="border" placeholder="Enter your email">
      </div>
      <div v-if="errors?.email">
        <span class="text-red-500">{{ errors.email[0] }}</span>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="">Password:</label>
      </div>
      <div>
        <input type="password" v-model="form.password" class="border" placeholder="Enter your password">
      </div>
      <div v-if="errors?.password">
        <span class="text-red-500">{{ errors.password[0] }}</span>
      </div>
    </div>
    <div class="mb-3">
      <button class="border">Login</button>
    </div>
  </form>
</template>

<script setup>
import { useAuthStore } from '@/stores/useAuthStore';
import getValidationErrors from '@/utils/getValidationErrors';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const errors = ref()

const router = useRouter()

const authStore = useAuthStore();

const form = reactive({
  email: null,
  password: null,
})

const login = async () => {
  try {
    await authStore.login(form)
    router.push({ name: 'dashboard' })
  } catch (error) {
    errors.value = getValidationErrors(error);
  }
}
</script>
