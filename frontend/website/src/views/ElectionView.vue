
<script setup>
    import { RouterLink, RouterView } from 'vue-router';

    import { useElectionsStore } from '@/stores/elections';
import { onMounted } from 'vue';

    /* -----------
    Data init
    ----------- */
    const electionsStore = useElectionsStore();

    onMounted(() => {
        document.title = electionsStore.currentElection?.title;
    });



</script>
<template>
    <nav class="flex align-items-center justify-content-center">
        <RouterLink custom v-slot="{ href, navigate }" :to="`/election/${ electionsStore.currentElection.id }`">
            <a v-ripple :href="href" @click="navigate" class="title">
                {{ electionsStore.currentElection.title }}
            </a>
        </RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

  