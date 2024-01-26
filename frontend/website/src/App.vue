<script setup>
  import { RouterView } from 'vue-router';
</script>

<template>
    <RouterView />
</template>

<style>
  html, body, #app {
    min-height: 100% !important;
  }
  .p-avatar img {
      object-fit: cover !important;   
  }
  main {
      position: absolute;
      top: 76px;
  }
</style>

