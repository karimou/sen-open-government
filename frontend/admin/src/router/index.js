import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    }
  ]
});

router.beforeEach(async to => {
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated() && (to.path != '/admin/login')) return '/admin/login';
  if (authStore.isAuthenticated() && (to.path == '/admin/login')) return '/admin/';
})

export default router
