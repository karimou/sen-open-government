
<script setup>
	import { useElectionsStore } from '@/stores/elections';
	import Dropdown from 'primevue/dropdown';
	import Button from 'primevue/button';
	import { computed, watch, onMounted, ref, inject } from 'vue';
	import { onBeforeRouteUpdate, useRoute } from 'vue-router';
	import Sidebar from 'primevue/sidebar';
	import AppSocialLinks from '@/components/AppSocialLinks.vue';
	import ScrollTop from 'primevue/scrolltop';

	import bgImage from '@/assets/bg.jpeg';
	import AppCandidateOpinionsPanel from '@/components/AppCandidateOpinionsPanel.vue';
	import AppCandidatesSelector from '@/components/AppCandidatesSelector.vue';

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
	onMounted(() => initParams(route.params));

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
	<div class="background-image pt-2 w-full" :style="{ backgroundImage: `url(${ bgImage })` }">

		<div class="issue-image" :style="{ backgroundImage: `url(${ issue?.photo })` }"></div>
		<div class="issue-name-zone justify-content-center">
			<div>
				<span class="text-4xl">{{ issue?.title }}</span>
			</div>
			<div>
				<Button label="Plus d'infos" text severity="primary" @click="descriptionVisible = true" />
			</div>
		</div>
		<div class="flex justify-content-center mb-6">
			<AppCandidatesSelector
				@scroll="scrollToAuthor($event)"
			/>
		</div>
		<div style="z-index: 1; position: relative;">
			<div class="grid">
				<div class="lg:col-offset-3 lg:col-6 md:col-offset-2 md:col-8 col-offset-1 col-10">
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
			class="w-full md:w-20rem lg:w-30rem"
		>
			<p style="white-space: pre-wrap;" v-html="issue?.short_description"/>
		</Sidebar>
	</div>
	<ScrollTop />
</template>

<style scoped>
	.background-image {
		background-attachment: fixed;
		background-position-y: 50%;
		background-position-y: 0%;
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 100%;
	}
	.issue-title:before, .issue-title:after {
		content: " ";
		width: 60px;
		height: 1px;
		display: inline-block;
		vertical-align: middle;   
		background-color: black;
	}
	.issue-name-zone {
		margin-top: 100px !important;
			margin-bottom: 100px !important;
		text-align: center;
	}
	.issue-image {
		position: fixed;
		background-size: contain;
		opacity: 0.9;
		/* filter: grayscale(1); */
		height: 500px;
		width: 500px;
		background-repeat: no-repeat;
		z-index: 0;
	}

		@media screen and (max-width: 769px) {
		.issue-image {
			opacity: 0.2;
		}

	}
	
</style>
	