import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/busqueda',
      name: 'busqueda',
      component: () => import('@/views/SearchPage.vue'),
    },
  ],
})

export default router
