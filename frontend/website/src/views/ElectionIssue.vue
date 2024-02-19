
<script setup>
	import { useElectionsStore } from '@/stores/elections';
	import Button from 'primevue/button';
	import { computed, watch, onMounted, ref, inject } from 'vue';
	import { onBeforeRouteUpdate, useRoute } from 'vue-router';
	import Sidebar from 'primevue/sidebar';

	import ScrollTop from 'primevue/scrolltop';

	import AppCandidateOpinionsPanel from '@/components/AppCandidateOpinionsPanel.vue';
	import AppCandidatesSelector from '@/components/AppCandidatesSelector.vue';
	import AppCandidatesSelectorCarousel from '@/components/AppCandidatesSelectorCarousel.vue';

	const $groupArrayBy = inject('$groupArrayBy');

	const route = useRoute();

	const selectedCandidate = ref(null);

	const electionId = ref(null);
	const issueId = ref(null);
	const issue = ref(null);
	const descriptionVisible = ref(false);

	const electionsStore = useElectionsStore();

	const initParams = (params) => {
		electionId.value = Number(params.electionId);
		issueId.value = Number(params.issueId);

	}
	onMounted(() => {
		initParams(route.params);
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	});

	onBeforeRouteUpdate((to, from) => {
		initParams(to.params);
		selectedCandidate.value = null;
	});

	watch(issueId, () => issue.value = electionsStore.getIssue(issueId.value));

	const displayedOpinions = computed(() => {
		if (!electionsStore.currentElection.opinions) return [];
		let filteredOpinions = electionsStore.currentElection.opinions
			.filter(opinion => selectedCandidate.value ? (opinion.author_id == selectedCandidate.value) : true)
			.filter(opinion => opinion.issue_id == issueId.value);
		return $groupArrayBy(filteredOpinions, (opinion) => opinion.author_id);
	});

    const candidateRefs = ref({});

	const scrollToAuthor = (candidateId) => {
        candidateRefs.value[candidateId]?.scrollIntoView({ behavior: 'smooth' });
	};

</script>
<template>
	<div class="pt-2 w-full">
		<div class="issue-name-zone justify-content-center">

			<img v-if="issue?.photo" :src="issue?.photo" width="150"/>
			<div>
				<span class="text-4xl">{{ issue?.title }}</span>
			</div>
			<div>
				<Button label="Plus d'infos" text severity="primary" @click="descriptionVisible = true" />
			</div>
		</div>
		<div 
			class="flex flex-wrap justify-content-center mb-6"
			style="max-width: 800px; margin: auto;"
		>
			<!-- <AppCandidatesSelectorCarousel
				@scroll="scrollToAuthor($event)"
			/> -->
			<AppCandidatesSelector
				@scroll="scrollToAuthor($event)"
			/>
		</div>
		<div style="z-index: 1; position: relative;">
			<div class="flex">
				<div class="lg:col-offset-3 lg:col-6 md:col-offset-2 md:col-8 col">
					<div
						v-for="(candidateOpinions, candidateId ) in displayedOpinions" :ref="(el) => candidateRefs[candidateId] = el"
					>
						<AppCandidateOpinionsPanel
							:opinions="candidateOpinions"
							:candidateId="Number(candidateId)"
							:collapsed="false"
						/>
					</div>
				</div>
			</div>
		</div>
		<Sidebar 
			v-model:visible="descriptionVisible" 
			header="Plus d'infos"
			class="w-11 md:w-20rem lg:w-30rem"
		>
			<p style="white-space: pre-wrap;" v-html="issue?.short_description"/>
		</Sidebar>
	</div>
	<ScrollTop />
</template>

<style scoped>
	.issue-name-zone {
		margin-top: 100px !important;
		margin-bottom: 100px !important;
		text-align: center;
	}

	
</style>
	