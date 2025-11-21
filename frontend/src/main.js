import '@/assets/main.css';
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura'

import App from './App.vue'
import router from './router'
import { Button } from 'primevue';
import Toast from "vue-toastification";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'false',
            cssLayer: false
        }
    }
})
app.use(Toast)

app.component('p-button', Button)

app.mount('#app')
