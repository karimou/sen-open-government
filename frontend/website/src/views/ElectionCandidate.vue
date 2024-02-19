<script setup>
	import { useElectionsStore } from '@/stores/elections';
	import Button from 'primevue/button';
	import { computed, watch, onMounted, ref, inject } from 'vue';
	import { onBeforeRouteUpdate, useRoute } from 'vue-router';
	import Sidebar from 'primevue/sidebar';
	import AppSocialLinks from '@/components/AppSocialLinks.vue';
	import ScrollTop from 'primevue/scrolltop';

	import AppIssueOpinionsPanel from '@/components/AppIssueOpinionsPanel.vue';

	import AppIssuesSelector from '@/components/AppIssuesSelector.vue';

	const $groupArrayBy = inject('$groupArrayBy');

	const route = useRoute();


	const electionId = ref(null);
	const candidateId = ref(null);
	const candidate = ref(null);
	const descriptionVisible = ref(false);

	const electionsStore = useElectionsStore();

	const initParams = (params) => {
		electionId.value = Number(params.electionId);
		candidateId.value = Number(params.candidateId);

	}
	onMounted(() => {
		initParams(route.params);
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	})


	onBeforeRouteUpdate((to, from) => {
		initParams(to.params);
	});

	watch(candidateId, () => {
		candidate.value = electionsStore.getCandidate(candidateId.value);
	});

	const displayedOpinions = computed(() => {
		if (!electionsStore.currentElection.opinions) return [];
		let filteredOpinions = electionsStore.currentElection.opinions
			.filter(opinion => opinion.author_id == candidateId.value);
		return $groupArrayBy(filteredOpinions, (opinion) => opinion.issue_id);
	});

    const candidateName = computed(() => {
		if (!candidate.value) return;
		return `${ candidate.value.firstname } ${ candidate.value.lastname }`;
    });

	watch(candidateName, (val) => {
		document.title = document.title + ' - ' + val;
	});

    const issueRefs = ref({});

	const scrollToIssue = (issueId) => {
        issueRefs.value[issueId]?.scrollIntoView({ behavior: 'smooth' });
	};


</script>
<template>
	<div class="pt-2 w-full">
		<div class="candidate-name-zone justify-content-center">

			<img v-if="candidate?.photo" :src="candidate?.photo" width="150"/>
			<div>
				<span class="text-4xl">{{ candidateName }}</span>
			</div>
			<span 
				v-if="electionsStore.hasCandidateOrganisations(candidateId)" 
				class="font-bold ml-4 font-light uppercase text-sm"
				style="color: #797979"
			>
				{{ electionsStore.getCandidateOrganisationsStr(candidateId) }}
			</span>
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
		<div 
			class="flex flex-wrap justify-content-center mb-6"
			style="max-width: 800px; margin: auto;"
		>
			<AppIssuesSelector
				@scroll="scrollToIssue($event)"
			/>
		</div>
		<div style="z-index: 1; position: relative;">
			<div class="flex">
				<div class="lg:col-offset-3 lg:col-6 md:col-offset-2 md:col-8 col">
					<div 
						v-for="(issueOpinions, issueId ) in displayedOpinions" :ref="(el) => issueRefs[issueId] = el"
					>
						<AppIssueOpinionsPanel
							:opinions="issueOpinions"
							:issueId="Number(issueId)"
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
			<p style="white-space: pre-wrap;" v-html="candidate.description"/>
		</Sidebar>
	</div>
	<ScrollTop />
</template>

<style scoped>
	.candidate-name-zone {
		margin-top: 100px !important;
    	margin-bottom: 40px !important;
		text-align: center;
	}


	
</style>