
<script setup>
	import { computed, ref, inject } from 'vue';
	import { useElectionsStore } from '@/stores/elections';
	import Button from 'primevue/button';
	import Divider from 'primevue/divider';
	import ElectionMainOpinionsByAuthor from '@/components/ElectionMainOpinionsByAuthor.vue';
	import ElectionMainOpinionsByIssue from '@/components/ElectionMainOpinionsByIssue.vue';
	import AppCandidatesSelector from '@/components/AppCandidatesSelector.vue';
	import AppIssuesSelector from '@/components/AppIssuesSelector.vue';

	const $groupArrayBy = inject('$groupArrayBy');

	const groupBy = ref('author_id');

	const electionsStore = useElectionsStore();

	const isGroupBy = (val) => groupBy.value == val;

	const toggleGroupBy = (val, event) => {
		groupBy.value = val;
		event.target.blur();
	};
	
	const groupedOpinions = computed(() => $groupArrayBy(electionsStore.currentElection.opinions, (item) => item[groupBy.value]));

	const scrollToAuthorId = ref(null);

	const scrollToAuthor = (candidateId) => {
		scrollToAuthorId.value = candidateId;
	};


	const scrollToIssueId = ref(null);
	const scrollToIssue = (issueId) => {
		scrollToIssueId.value = issueId;
	};

</script>

<template>
	<div class="flex flex-column">
		<div class="flex justify-content-center">
			<h5>Afficher les opinions par:</h5>
		</div>
		<div class="flex justify-content-center">
			<Button 
				:severity="isGroupBy('author_id') ? 'primary' : 'secondary'" 
				label="Candidat" 
				class="mx-2" 
				@click="toggleGroupBy('author_id', $event)" 
				rounded
				size="small"
			/>
			<Button 
				:severity="isGroupBy('issue_id') ? 'primary' : 'secondary'" 
				label="Thème" 
				class="mx-2" 
				@click="toggleGroupBy('issue_id', $event)" 
				rounded
				size="small"
			/>
		</div>
		<Divider />
		<div class="flex justify-content-center">
			<h5>Aller à:</h5>
		</div>
		<div 
			class="flex justify-content-center mb-4"
			style="max-width: 800px; margin: auto;flex-wrap: wrap;"
		>
			<template
				v-if="isGroupBy('author_id')"
			>
				<AppCandidatesSelector
					@scroll="scrollToAuthor($event)"
				/>

			</template>
			<template 
				v-else
			>
				<AppIssuesSelector
					@scroll="scrollToIssue($event)"
				/>

			</template>
		</div>
	</div>
	<Divider />
	<div class="grid">
		<div class="lg:col-offset-3 lg:col-6 md:col-offset-2 md:col-8 col">
			<ElectionMainOpinionsByAuthor 
				v-if="isGroupBy('author_id')"
				:groupedOpinions="groupedOpinions"
				:scrollToAuthorId="scrollToAuthorId"
				@onScrollFinish="scrollToAuthorId = null"
			/>
			<ElectionMainOpinionsByIssue 
				v-else
				:groupedOpinions="groupedOpinions"
				:scrollToIssueId="scrollToIssueId"
				@onScrollFinish="scrollToIssueId = null"
			/>
		</div>
	</div>
</template>

	