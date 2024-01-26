
<script setup>
	import { useElectionsStore } from '@/stores/elections';
	import Dropdown from 'primevue/dropdown';
	import Button from 'primevue/button';
	import { computed, watch, onMounted, ref } from 'vue';
	import { onBeforeRouteUpdate, useRoute } from 'vue-router';
	import Sidebar from 'primevue/sidebar';
	import AppSocialLinks from '@/components/AppSocialLinks.vue';
	import ScrollTop from 'primevue/scrolltop';

	import bgImage from '@/assets/bg.jpeg';
	import AppIssueOpinionsPanel from '@/components/AppIssueOpinionsPanel.vue';

	const route = useRoute();

	const selectedIssue = ref(null);

	const electionId = ref(null);
	const candidateId = ref(null);
	const candidate = ref(null);
	const descriptionVisible = ref(false);

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

	watch(candidateId, () => candidate.value = electionsStore.getCandidate(candidateId.value));

	const displayedOpinions = computed(() => {
		if (!electionsStore.currentElection.opinions) return [];
		let filteredOpinions = electionsStore.currentElection.opinions
			.filter(opinion => selectedIssue.value ? (opinion.issue_id == selectedIssue.value) : true)
			.filter(opinion => opinion.author_id == candidateId.value);
		return Object.groupBy(filteredOpinions, (opinion) => opinion.issue_id);
	});

    const candidateName = computed(() => {
		if (!candidate.value) return;
		return `${ candidate.value.firstname } ${ candidate.value.lastname }`;
    });


</script>
<template>
	<div class="background-image pt-2 w-full" :style="{ backgroundImage: `url(${ bgImage })` }">

		<div class="candidate-image" :style="{ backgroundImage: `url(${ candidate?.photo })` }"></div>
		<div class="candidate-name-zone justify-content-center">
			<div>
				<span class="text-4xl">{{ candidateName }}</span>
			</div>
			<div>
				<Button label="Plus d'infos" text severity="primary" @click="descriptionVisible = true" />
			</div>
			<AppSocialLinks 
				:website="candidate?.website"
				:facebook="candidate?.facebook"
				:instagram="candidate?.instagram"
				:twitter="candidate?.twitter"
			/>
		</div>
		<div style="z-index: 1; position: relative;">
			<div class="grid">
				<div class="lg:col-offset-3 lg:col-6 md:col-offset-2 md:col-8 col-offset-1 col-10">
					<div class="field">
						<Dropdown
							class="w-full"
							:options="electionsStore.currentElection.issues"
							v-model="selectedIssue"
							optionLabel="title"
							optionValue="id"
							showClear
							placeholder="Sélectionner un thème"
						/>
					</div>

					<AppIssueOpinionsPanel
						v-for="(issueOpinions, issueId ) in displayedOpinions" :ref="issueId"
						:opinions="issueOpinions"
						:issueId="Number(issueId)"
						:collapsed="false"
					/>
				</div>
			</div>
		</div>
		<Sidebar 
			v-model:visible="descriptionVisible" 
			header="Plus d'infos"
			class="w-full md:w-20rem lg:w-30rem"
		>
			<p style="white-space: pre-wrap;" v-html="candidate.description"/>
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
	.candidate-name-zone {
		margin-top: 100px !important;
    	margin-bottom: 100px !important;
		text-align: center;
	}
	.candidate-image {
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
		.candidate-image {
			opacity: 0.2;
		}

	}
	
</style>
	