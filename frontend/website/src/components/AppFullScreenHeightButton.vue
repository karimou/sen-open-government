<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['click']);

    const onClick = () => emit('click');

</script>
<template>
    <div class="lateral-banner cursor-pointer" @click="onClick">
      <slot name="label"></slot>
    </div>
</template>

<style scoped>
  .lateral-banner {
    position: absolute;
    top: 0; 
    right: 0;
    height: 100%;
    width: 60px;
    text-transform: uppercase;
    writing-mode: vertical-lr;
    background-color: aquamarine;
    margin: 0;

  }
</style>