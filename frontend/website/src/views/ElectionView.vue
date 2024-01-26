
<script setup>
    import { RouterLink, RouterView } from 'vue-router';

    import { useElectionsStore } from '@/stores/elections';

    /* -----------
    Data init
    ----------- */
    const electionsStore = useElectionsStore();



</script>
<template>
    <nav>
        <RouterLink custom v-slot="{ href, navigate }" :to="`/election/${ electionsStore.currentElection.id }`">
            <a v-ripple :href="href" @click="navigate">
                {{ electionsStore.currentElection.title }}
            </a>
        </RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

  