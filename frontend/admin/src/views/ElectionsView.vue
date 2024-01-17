<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import { ref, onMounted } from 'vue';
    import { API } from '@/services';

    const elections = ref([]);

    onMounted(() => {
        API.elections.listElections()
            .then(data => elections.value = data);
    });

    const selectedElections = ref(null);

    const deleteSelectedProducts = () => {
        alert('deleteSelectedProducts')
    };

    const openElectionUpsertForm = () => {
        alert('openElectionUpsertForm')
    };
    
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openElectionUpsertForm" />
                            <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="deleteSelectedProducts" :disabled="!selectedElections || !selectedElections.length" />
                        </div>
                    </template>
                </Toolbar>
                <DataTable 
                    :value="elections"
                    v-model:selection="selectedElections"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Elections</h5>
                        </div>
                    </template>
                    <Column selectionMode="multiple" headerStyle="width: 3rem" />
                    <Column field="id" header="#"></Column>
                    <Column field="title" header="Title"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column field="date" header="Date"></Column>
                    <Column field="description" header="Description"></Column>

                </DataTable>
            </div>
        </div>
    </div>
</template>