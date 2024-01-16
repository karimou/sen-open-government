<script setup>
  import { RouterView } from 'vue-router';
  import { useAuthStore  } from './stores/auth';
  import { computed } from 'vue';
  import TheNavigationDrawer from '@/components/TheNavigationDrawer.vue';

  const authSore = useAuthStore();
  authSore.loadUser();

  const userIsAuthenticated = computed(() => authSore.isAuthenticated());

</script>

<template>
  <TheNavigationDrawer v-if="userIsAuthenticated" />
  <RouterView />
</template>
