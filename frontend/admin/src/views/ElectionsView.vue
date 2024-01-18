<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import { ref, onMounted, defineAsyncComponent } from 'vue';
    import { API } from '@/services';
    import { useDialog } from 'primevue/usedialog';
    

    const elections = ref([]);
    const fetchData = () => {
        API.elections.listElections()
            .then(data => elections.value = data);
    };

    onMounted(fetchData);

    const selectedElections = ref(null);

    const deleteSelectedProducts = () => {
        alert('deleteSelectedProducts')
    };

    const dialog = useDialog();
    const ElectionsUpsertForm = defineAsyncComponent(() => import('@/components/ElectionsUpsertForm.vue'));

    const openElectionUpsertForm = (election = {}) => {
        dialog.open(ElectionsUpsertForm, { 
            data: election,
            onClose: fetchData
        });
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
                    <Column headerStyle="min-width: 100px">
                        <template #body="{ data }">
                            <Button icon="pi pi-pencil" @click="openElectionUpsertForm(data)"></Button>
                        </template>
                    </Column>

                </DataTable>
            </div>
        </div>
    </div>
</template>