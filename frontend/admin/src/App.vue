<script setup>
  import { RouterLink, RouterView } from 'vue-router';

  import { API } from '@/services';
  import { useAuthStore  } from './stores/auth';
  import { ref } from 'vue';

  const logUserOut = () => {
    API.auth.logUserOut();
  };

  const authSore = useAuthStore();
  authSore.loadUser();

  const isAuthenticated = ref(authSore.isAuthenticated());

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
    isAuthenticated: {{ isAuthenticated }}
    <nav>
      <RouterLink to="/admin">Home</RouterLink>
      <RouterLink to="/admin/login">Login</RouterLink>
      <button @click="logUserOut()">Logout</button>
    </nav>
  </header>

  <RouterView />
</template>
