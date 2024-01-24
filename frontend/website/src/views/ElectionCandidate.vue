
<script setup>
	import { useElectionsStore } from '@/stores/elections';
	import Dropdown from 'primevue/dropdown';
	import { computed, watch, onMounted, ref } from 'vue';
	import { onBeforeRouteUpdate, useRoute } from 'vue-router';
	import OpinionCard from '@/components/OpinionCard.vue';
	import CandidateCard from '@/components/CandidateCard.vue';


	const route = useRoute();

	const selectedIssue = ref(null);

	const electionId = ref(null);
	const candidateId = ref(null);
	const candidate = ref(null);

	const electionsStore = useElectionsStore();

	const initParams = (params) => {
		electionId.value = Number(params.electionId);
		candidateId.value = Number(params.candidateId);

	}
	onMounted(() => initParams(route.params));

	onBeforeRouteUpdate((to, from) => {
		initParams(to.params);
		selectedIssue.value = null;
	});

	watch(candidateId, () => {

		for (let i = 0; i < electionsStore.currentElection.candidates?.length; i++) {
			let item = electionsStore.currentElection.candidates[i];
			if (item.id == candidateId.value) return candidate.value = item;
		}
	});

	const displayedOpinions = computed(() => {
		if (!electionsStore.currentElection.opinions) return [];
		let filteredOpinions = electionsStore.currentElection.opinions
			.filter(opinion => selectedIssue.value ? (opinion.issue_id == selectedIssue.value) : true)
			.filter(opinion => opinion.author_id == candidateId.value);
		return Object.groupBy(filteredOpinions, (opinion) => opinion.issue_id);
	});



</script>
<template>
	<div>
		<Dropdown
			:options="electionsStore.currentElection.issues"
			v-model="selectedIssue"
			optionLabel="title"
			optionValue="id"
            showClear
		/>
	</div>
	<div>
		<CandidateCard
			v-if="candidate"
			:candidate="candidate"
		/>
	</div>
	<div 
		v-for="(issueOpinions, issueId ) in displayedOpinions"
	>
		<h5>{{ electionsStore.getIssueTitle(issueId) }}</h5>
		<OpinionCard
			v-for="opinion in issueOpinions"
			:opinion="opinion"
		/>
	</div>
</template>
	