
<script setup>
    import { RouterLink, RouterView } from 'vue-router';

    import { useElectionsStore } from '@/stores/elections';
    import { onMounted } from 'vue';

    import logoDs from '@/assets/logo-DS.png';

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
        <div class="logo" style="position: absolute; left: 10px">
            <!-- Logo Placeholder for Illustration -->
            <a href="#home"><img width="80px" height="auto" :src="logoDs"></a>
        </div>
        <RouterLink custom v-slot="{ href, navigate }" :to="`/election/${ electionsStore.currentElection.id }`">
            <a v-ripple :href="href" @click="navigate" class="title">
                {{ electionsStore.currentElection.title }}
            </a>
        </RouterLink>
    </nav>
    <main >
        <RouterView />
    </main>
</template>

  