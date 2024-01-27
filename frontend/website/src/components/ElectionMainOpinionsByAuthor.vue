<script setup>
    import { toRefs, watch, ref, inject } from 'vue';
	import Button from 'primevue/button';
	import Avatar from 'primevue/avatar';
    import ScrollTop from 'primevue/scrolltop';
    import Card from 'primevue/card';
	import router from '@/router';
    import { useElectionsStore } from '@/stores/elections';
    
    import AppIssueOpinionsPanel from './AppIssueOpinionsPanel.vue';

    const $groupArrayBy = inject('$groupArrayBy');
    
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
        <Card v-if="electionsStore.getCandidate(candidateId)">
            <template #content>
                <div class="flex align-items-center">
                    <Avatar 
                        :image="electionsStore.getCandidate(candidateId)?.photo"
                        size="xlarge"
                        shape="rectangle"
                        class="mr-2"
                    />
                    <div class="flex flex-column">
                        <Button
                            text
                            @click="router.push(`/election/${ electionsStore.currentElection.id }/candidate/${ candidateId }`)"
                        >
                            {{ electionsStore.getCandidateName(candidateId) }}
                        </Button>
                        <span 
                            v-if="electionsStore.hasCandidateOrganisations(candidateId)" 
                            class="font-bold ml-4 font-light uppercase text-sm"
                            style="color: #797979"
                        >
                            {{ electionsStore.getCandidateOrganisationsStr(candidateId) }}
                        </span>
                    </div>
                </div>
                <AppIssueOpinionsPanel
                    v-for="(opinions, issueId ) in $groupArrayBy(candidateOpinions, opinion => opinion.issue_id)"
                    :opinions="opinions"
                    :issueId="Number(issueId)"
                />
            </template>
        </Card>
    </div>
	<ScrollTop />
</template>