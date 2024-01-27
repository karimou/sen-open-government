<script setup>
    import Button from 'primevue/button';
    import Avatar from 'primevue/avatar';
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
        class="mx-1" 
        text
        size="small"
        severity="primary"
        @click="scrollToIssue(issue.id, $event)"
    >
        <Avatar 
            :image="issue.photo"
            shape="circle"
            class="mr-1"
        />
        <span class="p-button-label">{{ issue.title }}</span>
    </Button>

</template>