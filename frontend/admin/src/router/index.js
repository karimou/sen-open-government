import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'main',
      component: MainView,
      children: [
        {
          path: '/admin',
          name: 'home',
          component: () => import('@/views/ElectionsView.vue')
        },
        {
          path: '/admin/elections',
          name: 'elections',
          component: () => import('@/views/ElectionsView.vue')
        },
        {
          path: '/admin/persons',
          name: 'persons',
          component: () => import('@/views/PersonsView.vue')
        },
        {
          path: '/admin/organisations',
          name: 'organisations',
          component: () => import('@/views/OrganisationsView.vue')
        },
        {
          path: '/admin/issues',
          name: 'issues',
          component: () => import('@/views/IssuesView.vue')
        },
        {
          path: '/admin/opinions',
          name: 'opinions',
          component: () => import('@/views/OpinionsView.vue')
        },
        {
          path: '/admin/users',
          name: 'users',
          component: () => import('@/views/UsersView.vue')
        },
        {
          path: '/admin/document-pages',
          name: 'users',
          component: () => import('@/views/DocumentPagesView.vue')
        },
      ]
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
