<script setup>
    import { inject, onMounted, ref, computed } from 'vue';
    import { useOpinionsStore } from '@/stores/opinions';
    
    import BaseOpinionsTable from '@/components/BaseOpinionsTable.vue';

    /* -----------
    Data init
    ----------- */
    const tableLoading = ref(false);
    const dialogRef = inject('dialogRef');
    const person = ref(null);
    const opinionsStore = useOpinionsStore();

    onMounted(async () => {
        person.value = dialogRef.value.data;
        if (!opinionsStore.opinions) await opinionsStore.refreshOpinions();
    });

    const personOpinions = computed(() => {
        return opinionsStore.getPersonOpinions(person.value?.id);
    });

</script>

<template>
    <BaseOpinionsTable 
        :opinions="personOpinions"
        :group="true"
        defaultGroupingHeader="issue.title"
        :loading="tableLoading"
        :personId="person?.id"
        @refresh="opinionsStore.refreshOpinions"
    />
    
</template>