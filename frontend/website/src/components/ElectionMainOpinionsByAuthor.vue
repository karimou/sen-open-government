<script setup>
    import { toRefs, watch, ref } from 'vue';
	import Button from 'primevue/button';
	import Avatar from 'primevue/avatar';
    import ScrollTop from 'primevue/scrolltop';
	import router from '@/router';
    import { useElectionsStore } from '@/stores/elections';

    import AppIssueOpinionsPanel from './AppIssueOpinionsPanel.vue';

    const props = defineProps({
        groupedOpinions: {
            type: Object,
            default: {}
        },
        scrollToAuthorId: {
            type: Number
        }
    });

    const emits = defineEmits(['onScrollFinish']);


    const { groupedOpinions, scrollToAuthorId } = toRefs(props);

    const candidateRefs = ref({});

	const electionsStore = useElectionsStore();

	const formatName = (candidate) => {
		if (!candidate) return;
		return `${ candidate.firstname } ${ candidate.lastname }`;
	};

    watch(scrollToAuthorId, () => {
        if (!scrollToAuthorId.value) return;
        candidateRefs.value[scrollToAuthorId.value]?.scrollIntoView({ behavior: 'smooth' });
        emits('onScrollFinish');
    });

</script>

<template>
    <div 
        v-for="(candidateOpinions, candidateId) in groupedOpinions" 
        class="mb-4"
        :ref="(el) => candidateRefs[candidateId] = el"
    >
        <div class="flex align-items-center" v-if="electionsStore.getCandidate(candidateId)">
            <Avatar 
                :image="electionsStore.getCandidate(candidateId)?.photo"
                size="xlarge"
                shape="rectangle"
                class="mr-2"
            />
            <Button
                text
                @click="router.push(`/election/${ electionsStore.currentElection.id }/candidate/${ candidateId }`)"
            >
                {{ formatName(electionsStore.getCandidate(candidateId)) }}
            </Button>
        </div>
        <div>
            <AppIssueOpinionsPanel
                v-for="(opinions, issueId ) in Object.groupBy(candidateOpinions, opinion => opinion.issue_id)"
                :opinions="opinions"
                :issueId="Number(issueId)"
            />

        </div>
    </div>
	<ScrollTop />
</template>