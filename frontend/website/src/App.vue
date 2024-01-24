<script setup>
  import { ref } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';
  import Menubar from 'primevue/menubar';

  const menu = ref([
    {
      route: '/', 
      icon: 'pi pi-home', 
      label: 'Home',
    }
  ]);
</script>

<template>
    <RouterView />
</template>
