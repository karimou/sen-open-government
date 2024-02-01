<script setup>

    import BaseOpinionsTableProposalsTable from '@/components/BaseOpinionsTableProposalsTable.vue';
    import { ref, inject, onMounted } from 'vue';

    import { API } from '@/services/api';

    /* -----------
    Data init
    ----------- */
    const tableLoading = ref(false);
    const dialogRef = inject('dialogRef');
    const opinion = ref(null);
    const opinionProposals = ref([]);
    const fetchProposals = () => {
        tableLoading.value = true;
        if (!opinion.value?.id) return;
        API.opinions.listProposals(opinion.value?.id)
            .then(data => opinionProposals.value = data)
            .then(() => tableLoading.value = false);
    };
    onMounted(() => {
        opinion.value = dialogRef.value.data;
        fetchProposals();
    });
</script>
<template>
    <div style="width: 850px">
        <BaseOpinionsTableProposalsTable
            :proposals="opinionProposals"
            :opinion="opinion"
            :loading="tableLoading"
            @refresh="fetchProposals"
        />
    </div>
</template>