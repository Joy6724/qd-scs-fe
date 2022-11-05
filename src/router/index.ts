import { createRouter, createWebHistory } from 'vue-router'
import ImportInfo from '../views/ImportInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ImportInfo
    },
    {
      path: '/import',
      name: 'ImportInfo',
      component: ImportInfo
    }
  ]
})

export default router
