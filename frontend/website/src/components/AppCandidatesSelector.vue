<script setup>
    import Button from 'primevue/button';
    import Avatar from 'primevue/avatar';
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
        class="mx-2" 
        text
        size="small"
        severity="primary"
        @click="scrollToAuthor(candidate.id, $event)"
    >
        <Avatar 
            :image="candidate.photo"
            shape="circle"
            class="mr-1"
        />
        <span class="p-button-label">{{ electionsStore.getCandidateName(candidate.id) }}</span>
    </Button>


</template>