<script setup>
    import { ref, onMounted } from 'vue';
    import { useOpinionsStore } from '@/stores/opinions';
    import BaseOpinionsTable from '@/components/BaseOpinionsTable.vue';
    

    /* -----------
    Data init
    ----------- */
    const tableLoading = ref(false);
    const opinionsStore = useOpinionsStore();
    onMounted(() => {
        tableLoading.value = true;
        opinionsStore.refreshOpinions()
            .then(() => tableLoading.value = false);
    });
    
</script>

<template>
    <BaseOpinionsTable 
        :opinions="opinionsStore.opinions"
        :group="true"
        :loading="tableLoading"
        @refresh="opinionsStore.refreshOpinions"
    />
</template>
