
<script setup>
  import { ref } from 'vue';
  import { useElectionsStore } from '@/stores/elections';
  const electionsStore = useElectionsStore();
  import Card from 'primevue/card';

  const formatCandidateName = (candidate) => {
    if (!candidate) return;
    return `${ candidate.firstname } ${ candidate.lastname }`;
  };

  const hoveredCandidate = ref(null);

</script>

<template>
  <div>
    Sélectionnez un candidat
    {{ formatCandidateName(hoveredCandidate) }}
  </div>
  <div class="grid">
    <div class="col-2 card flex align-items-center justify-content-center" 
      v-for="candidate in electionsStore.currentElection?.candidates"
    >
      <Card
        @mouseover="hoveredCandidate = candidate"
        @mouseleave="hoveredCandidate = null"
      >
        <template #header>
            <img :src="candidate.photo" 
              style="max-width: 100%;"
              :imageStyle="{maxWidth: '100%'}"
            />
        </template>
        <template #title>{{ formatCandidateName(candidate) }}</template>
        <template #subtitle> Card subtitle </template>
        <template #content>
          {{ candidate.description }}
        </template>
      </Card>
    </div>
  </div>
</template>
  