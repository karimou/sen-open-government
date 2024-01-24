
<script setup>
	import { ref } from 'vue';
	import { useElectionsStore } from '@/stores/elections';

	import CandidateCard from '@/components/CandidateCard.vue';

	const electionsStore = useElectionsStore();
	
	const formatCandidateName = (candidate) => {
		if (!candidate) return;
		return `${ candidate.firstname } ${ candidate.lastname }`;
	};

	const hoveredCandidate = ref(null);

</script>

<template>
	<div>
		Sélectionnez un candidat: 
		{{ formatCandidateName(hoveredCandidate) }}
	</div>
	<div class="grid">
		<div class="col-6 sm:col-4 md:col-3 lg:col-2 card flex justify-content-center" 
			v-for="candidate in electionsStore.currentElection?.candidates"
		>
			<CandidateCard
				:candidate="candidate"
				@mouseover="hoveredCandidate = candidate"
				@mouseleave="hoveredCandidate = null"
			/>
			
		</div>
	</div>
</template>

	