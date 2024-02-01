
<script setup>
    import Panel from 'primevue/panel';
    import Avatar from 'primevue/avatar';
    import Badge from 'primevue/badge';
    import { computed, toRefs, ref } from 'vue';
    import AppOpinion from '@/components/AppOpinion.vue';

    import { useElectionsStore } from '@/stores/elections';
    const electionsStore = useElectionsStore();

    const props = defineProps({
        candidateId: {
            type: Number
        },
        opinions: {
            type: Object,
            default: []
        },
        collapsed: {
            type: Boolean,
            default: true
        }
    });

    const { opinions, candidateId, collapsed } = toRefs(props);

    const candidate = computed(() => {
        return electionsStore.getCandidate(candidateId.value);
    })

    const candidateName = computed(() => {
		if (!candidate.value) return;
		return `${ candidate.value.firstname } ${ candidate.value.lastname }`;
    });

</script>

<template>
    <Panel 
        :collapsed="collapsed"
        toggleable class="w-full my-2"
    >
        <template #header>
            <div class="flex align-items-center gap-2">
                <Avatar 
                    :image="candidate?.photo"
                    size="large" 
                    shape="rectangle" 
                />
                <span class="font-bold">{{ candidateName }}</span>
                <Badge :value="opinions.length" severity="success"></Badge>
            </div>
        </template>
        <AppOpinion
            v-for="(opinion, index) in opinions"
            :opinion="opinion"
            :includeDivider="index != opinions.length - 1"
        />
    </Panel>
</template>