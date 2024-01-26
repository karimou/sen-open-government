
<script setup>
    import Panel from 'primevue/panel';
    import Avatar from 'primevue/avatar';
    import Divider from 'primevue/divider';
    import { toRefs } from 'vue';

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

	const formatName = (candidate) => {
		if (!candidate) return;
		return `${ candidate.firstname } ${ candidate.lastname }`;
	};

</script>

<template>
    <Panel 
        :collapsed="collapsed"
        toggleable class="w-full my-2"
    >
        <template #header>
            <div class="flex align-items-center gap-2">
                <Avatar 
                    :image="electionsStore.getCandidate(candidateId)?.photo"
                    size="large" 
                    shape="rectangle" 
                />
                <span class="font-bold">{{ formatName(electionsStore.getCandidate(candidateId)) }}</span>
            </div>
        </template>
        <p
            class="m-0"
            v-for="(opinion, index) in opinions"
        >
            {{ opinion.summary }}
            <Divider v-if="index != opinions.length - 1"/>
        </p>
    </Panel>
</template>