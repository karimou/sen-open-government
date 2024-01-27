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
  .p-avatar img, .p-chip img {
      object-fit: cover !important;   
  }
  main {
      position: absolute;
      top: 76px;
  }
  nav {
    height: 76px;
    /* padding: 5px 10px 5px 20px; */
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 180;
    width: 100%;
    transition: background-color 1s;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    box-sizing: border-box
  }
  nav.on-top {
    z-index: 300;
  }
  @media screen and (min-width: 1024px) {
    nav {
      height: 96px;
      /* padding: 10px 18px 10px 52px; */
    }
    main {
        top: 96px;
    }
  }
  nav .title {
    text-decoration: none;
    cursor: pointer;
    font-family: "Interstate", sans-serif;
    font-size: 30px;
    font-weight: bold;
    /* text-transform: uppercase; */
    letter-spacing: 3px;
    color: #111;
  }
</style>

