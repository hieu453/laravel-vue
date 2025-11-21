import Login from '@/pages/auth/Login.vue'
import Register from '@/pages/auth/Register.vue'
import Dashboard from '@/pages/admin/Dashboard.vue'
import Home from '@/pages/Home.vue'
import { useAuthStore } from '@/stores/useAuthStore'
import { createRouter, createWebHistory } from 'vue-router'
import CategoriesIndex from '@/pages/admin/categories/Index.vue'
import ProductsIndex from '@/pages/admin/products/Index.vue'
import UsersIndex from '@/pages/admin/users/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/admin',
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          component: Dashboard,
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'categories',
          name: 'categories.index',
          component: CategoriesIndex,
        },
        {
          path: 'products',
          name: 'products.index',
          component: ProductsIndex,
        },
        {
          path: 'users',
          name: 'users.index',
          component: UsersIndex,
        },
      ]
    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: Dashboard,
    //   meta: {
    //     requiresAuth: true
    //   },
    // },
    // {
    //   path: '/admin/categories',
    //   name: 'categories.index',
    //   component: CategoriesIndex,
    //   meta: {
    //     requiresAuth: true,
    //   }
    // },
    // {
    //   path: '/admin/products',
    //   name: 'products.index',
    //   component: ProductsIndex,
    //   meta: {
    //     requiresAuth: true,
    //   }
    // }
  ],
})

router.beforeEach((to, from) => {
  const authStore = useAuthStore()

  if (!authStore.isAuthenticated && to.meta.requiresAuth) {
    return { name: 'login' }
  } else if (authStore.isAuthenticated && !to.meta.requiresAuth) {
    return { name: 'dashboard' }
  }
})

export default router
