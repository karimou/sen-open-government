<script setup>
  import { RouterView } from 'vue-router';
  import { useAuthStore  } from '@/stores/auth';
  import DynamicDialog from 'primevue/dynamicdialog';

  const authSore = useAuthStore();
  authSore.loadUser();

</script>

<template>
  <RouterView />
  <DynamicDialog/>
</template>


<style>
    .p-avatar img {
        object-fit: cover !important;   
    }
</style>
