
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
        <div class="md:w-1 ml-2">
            <a href="https://www.demainsenegal.sn/" target="_blank">
                <img :src="logoDs" class="w-11 h-11" style="max-height: 60px;">
            </a>
        </div>
        <div class="flex overflow-scroll w-11 h-full align-items-center justify-content-center">
            <RouterLink custom v-slot="{ href, navigate }" :to="`/election/${ electionsStore.currentElection.id }`">
                <a v-ripple :href="href" @click="navigate" class="title">
                    {{ electionsStore.currentElection.title }}
                </a>
            </RouterLink>
        </div>
    </nav>
    <main >
        <RouterView />
    </main>
</template>

  