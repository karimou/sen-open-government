
<script setup>
    import { onMounted, ref } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    import MegaMenu from 'primevue/megamenu';

    import { useElectionsStore } from '@/stores/elections';

    /* -----------
    Data init
    ----------- */
    const electionsStore = useElectionsStore();
    const menu = ref(null);

    const CANDIDATES_MENU_COLUMNS = 3;
    const ISSUES_MENU_COLUMNS = 3;

    onMounted(() => {
        menu.value = [
            {
                label: 'Candidats',
                root: true,
                items: [...Array(CANDIDATES_MENU_COLUMNS).keys()].map(i => ([{
                    label: null,
                    items: electionsStore.currentElection?.candidates?.filter((_candidate, index) => index % CANDIDATES_MENU_COLUMNS == i)
                        .map(candidate => ({
                            label: candidate.firstname,
                            route: `/election/${ electionsStore.currentElection?.id }/candidate/${ candidate.id }`
                        })) ?? []
                }]))
            },
            {
                label: 'Thèmes',
                root: true,
                items: [...Array(ISSUES_MENU_COLUMNS).keys()].map(i => ([{
                    label: null,
                    items: electionsStore.currentElection?.issues?.filter((_issue, index) => index % ISSUES_MENU_COLUMNS == i)
                        .map(issue => ({
                            label: issue.title,
                            route: `/election/${ electionsStore.currentElection?.id }/issue/${ issue.id }`
                        })) ?? []
                }]))
            },
        ];
    });

</script>
<template>
    <MegaMenu :model="menu" v-if="menu">
        <template #start>
            <RouterLink custom v-slot="{ href, navigate }" :to="`/election/${ electionsStore.currentElection.id }`">
                <a v-ripple :href="href" @click="navigate">
                    {{ electionsStore.currentElection.title }}
                </a>
            </RouterLink>
        </template>
        <template #item="{ item }">
            <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" @click="navigate">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </RouterLink>
            <a v-else v-ripple class="flex align-items-center uppercase cursor-pointer px-3 py-2">
                <span>{{ item.label }}</span>
            </a>
        </template>
    </MegaMenu>
    <RouterView />
</template>
  