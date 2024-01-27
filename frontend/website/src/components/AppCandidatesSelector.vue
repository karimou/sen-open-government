<script setup>
    import Button from 'primevue/button';
    import { useElectionsStore } from '@/stores/elections';

    const electionsStore = useElectionsStore();

    const emit = defineEmits(['scroll']);

    const scrollToAuthor = (candidateId, event) => {
        emit('scroll', candidateId);
        if (event) event.target.blur();
    }

</script>
<template>

    <Button 
        v-for="candidate in electionsStore.currentElection.candidates"
        :label="electionsStore.getCandidateName(candidate.id)" 
        class="mx-2" 
        text
        size="small"
        severity="primary"
        @click="scrollToAuthor(candidate.id, $event)"
    />

</template>