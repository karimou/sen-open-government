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
    .truncate {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
    }
    .truncate.l3 {
      -webkit-line-clamp: 3; /* number of lines to show */
      line-clamp: 3;
    }
</style>
