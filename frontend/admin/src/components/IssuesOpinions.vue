<script setup>
    import { inject, onMounted, ref, computed } from 'vue';
    import { useOpinionsStore } from '@/stores/opinions';
    
    import BaseOpinionsTable from '@/components/BaseOpinionsTable.vue';

    /* -----------
    Data init
    ----------- */
    const tableLoading = ref(false);
    const dialogRef = inject('dialogRef');
    const issue = ref(null);
    const opinionsStore = useOpinionsStore();

    onMounted(async () => {
        issue.value = dialogRef.value.data;
        if (!opinionsStore.opinions) await opinionsStore.refreshOpinions();
    });

    const issueOpinions = computed(() => {
        return opinionsStore.getIssueOpinions(issue.value?.id);
    });

</script>

<template>
    <BaseOpinionsTable 
        :opinions="issueOpinions"
        :group="true"
        defaultGroupingHeader="author.name"
        :loading="tableLoading"
        :issueId="issue?.id"
        @refresh="opinionsStore.refreshOpinions"
    />
    
</template>