<script setup>
    import Button from 'primevue/button';
    import { useElectionsStore } from '@/stores/elections';

    const electionsStore = useElectionsStore();

    const emit = defineEmits(['scroll']);


	const scrollToIssue = (issueId, event) => {
		emit('scroll', issueId);
		event.target.blur();
	};

</script>
<template>

    <Button 
        v-for="issue in electionsStore.currentElection.issues"
        :label="issue.title" 
        class="mx-1" 
        text
        size="small"
        severity="primary"
        @click="scrollToIssue(issue.id, $event)"
    />

</template>