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
    <Menubar :model="menu">
      <template #start>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30"/>
      </template>
      <template #item="{ item, props, hasSubmenu }">
        <RouterLink v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </RouterLink>
        
      </template>
    </Menubar>

  <RouterView />
</template>
