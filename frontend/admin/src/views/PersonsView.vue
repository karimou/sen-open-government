<script setup>
    import { ref, onMounted } from 'vue';
    import { usePersonsStore } from '@/stores/persons';

    import BasePersonsTable from '@/components/BasePersonsTable.vue';
    

    /* -----------
    Data init
    ----------- */
    const tableLoading = ref(false);
    const personsStore = usePersonsStore();
    
    onMounted(() => {
        tableLoading.value = true;
        personsStore.refreshPersons()
            .then(() => tableLoading.value = false);
    });

    
</script>

<template>
    <BasePersonsTable
        :persons="personsStore.persons"
        :loading="tableLoading"
        @refresh="personsStore.refreshPersons"
    />
</template>
