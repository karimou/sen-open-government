<script setup>
  import { RouterView } from 'vue-router';
</script>

<template>
    <RouterView />
</template>

<style>
  html, body, #app {
    min-height: 100% !important;
    /* font-family: 'Raleway, sans-serif' !important; */
    font-size: 18px;
  }
  .p-avatar img, .p-chip img {
      object-fit: cover !important;   
  }
  main {
      position: absolute;
      top: 56px;
  }
  nav {
    height: 56px;
    border-bottom: 3px solid red;
    background-color: white;
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
      height: 76px;
      /* padding: 10px 18px 10px 52px; */
    }
    main {
        top: 76px;
    }
  }
  nav .title {
    text-decoration: none;
    cursor: pointer;
    font-family: "Impact", sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #111;
  }
  nav .logo img {
    width: 80px;
    height: auto;
  }
  @media screen and (max-width: 664px) {
    nav .logo img {
      width: 50px;
    }

    nav .title {
      font-size: 20px;
    }
  }
</style>

