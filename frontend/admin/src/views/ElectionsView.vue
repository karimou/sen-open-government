<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import Skeleton from 'primevue/skeleton';
    import { ref, onMounted, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import { useElectionsStore } from '@/stores/elections';
    

    /* -----------
    Data init
    ----------- */
    const emptyArray = new Array(5);
    const electionsStore = useElectionsStore();
    const tableLoading = ref(false);
    onMounted(() => {
        tableLoading.value = true;
        electionsStore.refreshElections()
            .then(() => tableLoading.value = false);
    });


    /* -----------
    Elections deletion handling
    ----------- */
    const selectedElections = ref(null);
    const loading = ref(false);
    const deleteSelectedElections = () => {
        let ids = selectedElections.value?.map(election => election.id);
        loading.value = true;
        API.elections.deleteElections(ids)
            .then(() => {
                electionsStore.refreshElections();
                selectedElections.value = null;
            })
            .finally(() => loading.value = false);
    };

    /* -----------
    Elections upsert handling
    ----------- */
    const dialog = useDialog();
    const ElectionsUpsertForm = defineAsyncComponent(() => import('@/components/ElectionsUpsertForm.vue'));
    const openElectionUpsertForm = (election = {}) => {
        dialog.open(ElectionsUpsertForm, { 
            data: election,
            onClose: electionsStore.refreshElections,
            props: {
                modal: true
            }
        });
    };

    /* -----------
    Elections canidates list display
    ----------- */
    const ElectionsCandidates = defineAsyncComponent(() => import('@/components/ElectionsCandidates.vue'));
    const displayElectionCandidatesList = (election = {}) => {
        dialog.open(ElectionsCandidates, { 
            data: election,
            onClose: () => console.log('ElectionsCandidates', 'close'),
            props: {
                modal: true
            }
        });
    }
    
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card" v-if="!!tableLoading">
                <DataTable :value="emptyArray">
                    <Column field="title" header="Titre">
                        <template #body>
                            <Skeleton></Skeleton>
                        </template>
                    </Column>
                    <Column field="type" header="Type">
                        <template #body>
                            <Skeleton></Skeleton>
                        </template>
                    </Column>
                    <Column field="date" header="Date">
                        <template #body>
                            <Skeleton></Skeleton>
                        </template>
                    </Column>
                    <Column field="description" header="Description">
                        <template #body>
                            <Skeleton></Skeleton>
                        </template>
                    </Column>
                </DataTable>
            </div>
            <div class="card" v-else-if="electionsStore.elections?.length > 0">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button 
                                label="Ajouter une élection" 
                                icon="pi pi-plus" 
                                class="p-button-success mr-2" 
                                @click="openElectionUpsertForm"
                            ></Button>
                            <Button 
                                label="Supprimer la sélection" 
                                icon="pi pi-trash" 
                                class="p-button-danger" 
                                @click="deleteSelectedElections" 
                                :disabled="!selectedElections || !selectedElections.length" 
                                :loading="loading"
                            ></Button>
                        </div>
                    </template>
                </Toolbar>
                <DataTable 
                    :value="electionsStore.elections"
                    v-model:selection="selectedElections"
                    :loading="tableLoading"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Élections</h5>
                        </div>
                    </template>
                    <template #loading> Loading customers data. Please wait. </template>
                    <Column selectionMode="multiple" headerStyle="width: 3rem" />
                    <Column headerStyle="min-width: 100px">
                        <template #body="{ data }">
                            <Button class="p-button-text p-button-rounded" icon="pi pi-pencil" @click="openElectionUpsertForm(data)"></Button>
                            <Button class="p-button-text p-button-rounded" icon="pi pi-users" @click="displayElectionCandidatesList(data)"></Button>
                        </template>
                    
                    </Column>
                    <Column field="title" header="Titre"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column field="date" header="Date"></Column>
                    <Column field="description" header="Description"></Column>

                </DataTable>
            </div>
            <div
                class="px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                style="width: 600px; background-color: white;"
                v-else
            >
                <div>
                    <div class="font-medium text-xl mt-2 mb-3">Aucune élection</div>
                    <div class="font-medium">Cliquer sur le bouton suivant pour rajouter une première élection à la base de données</div>
                </div>
                <div class="mt-4 mr-auto md:mt-0 md:mr-0">
                    <Button 
                        class="p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised"
                        @click="openElectionUpsertForm"
                    >Ajouter</Button>
                </div>
            </div>
        </div>
    </div>
</template>
