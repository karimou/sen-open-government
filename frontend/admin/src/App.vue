<script setup>
  import { RouterView } from 'vue-router';
  import { useAuthStore  } from './stores/auth';

  const authSore = useAuthStore();
  authSore.loadUser();

</script>

<template>
  <RouterView />
</template>
