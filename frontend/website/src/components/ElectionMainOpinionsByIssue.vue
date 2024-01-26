<script setup>
    
    import { toRefs, ref, watch } from 'vue';
	import Button from 'primevue/button';
	import Avatar from 'primevue/avatar';
    import ScrollTop from 'primevue/scrolltop';
	import router from '@/router';
    import { useElectionsStore } from '@/stores/elections';

    import AppCandidateOpinionsPanel from './AppCandidateOpinionsPanel.vue';

    const props = defineProps({
        groupedOpinions: {
            type: Object,
            default: {}
        },
        scrollToIssueId: {
            type: Number
        }
    });

    const emits = defineEmits(['onScrollFinish']);

    const { groupedOpinions, scrollToIssueId } = toRefs(props);

	const electionsStore = useElectionsStore();

    const issueRefs = ref({});


    watch(scrollToIssueId, () => {
        if (!scrollToIssueId.value) return;
        issueRefs.value[scrollToIssueId.value]?.scrollIntoView({ behavior: 'smooth' });
        emits('onScrollFinish');
    });
</script>

<template>
    <div 
        v-for="(candidateOpinions, issueId) in groupedOpinions" class="mb-4"
        :ref="(el) => issueRefs[issueId] = el"
    >
        <template v-if="electionsStore.getIssue(issueId)">
            <div class="flex align-items-center">
                <Avatar 
                    :image="electionsStore.getIssueImage(issueId)"
                    size="xlarge"
                    shape="rectangle"
                    class="mr-2"
                />
                <Button
                    text
                    @click="router.push(`/election/${ electionsStore.currentElection.id }/issue/${ issueId }`)"
                >
                    {{ electionsStore.getIssueTitle(issueId) }}
                </Button>
            </div>
            <div>
                <AppCandidateOpinionsPanel
                    v-for="(opinions, candidateId ) in Object.groupBy(candidateOpinions, opinion => opinion.author_id)"
                    :opinions="opinions"
                    :candidateId="Number(candidateId)"
                />

            </div>
        </template>
    </div>
	<ScrollTop />
</template>