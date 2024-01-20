<script setup>
    import { inject, onMounted, ref, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';

    /* -----------
    Data init
    ----------- */
    const dialogRef = inject('dialogRef');
    const election = ref(null);
    const electionCandidates = ref([]);
    const fetchCandidates = () => {
        if (!election.value?.id) return;
        API.elections.listElectionCandidates(election.value?.id)
            .then(data => electionCandidates.value = data);
    };
    onMounted(() => {
        election.value = dialogRef.value.data;
        fetchCandidates();
    });

    /* -----------
    Handle candidates addition
    ----------- */
    const dialog = useDialog();
    const ElectionCandidateAdditionForm = defineAsyncComponent(() => import('@/components/ElectionCandidateAdditionForm.vue'));
    const openCandidateAdditionForm = () => {
        dialog.open(ElectionCandidateAdditionForm, {
            data: { electionId: election.value?.id },
            onClose: (props) => {
                if (props?.data == 'success') fetchCandidates();
            },
            props: {
                modal: true
            }
        })
    }

    /* -----------
    Handle candidates removal
    ----------- */
    const selectedCandidates = ref(null);
    const loading = ref(false);
    const removeSelectedCandidates = () => {
        let pairs = selectedCandidates.value?.map(candidate => ({ electionId: election.value?.id, personId: candidate.id }));
        loading.value = true;
        API.elections.removeElectionCandidates(pairs)
            .then(() => {
                fetchCandidates();
                selectedCandidates.value = null;
            })
            .finally(() => loading.value = false);
    };
</script>

<template>
    
    <div style="width: 650px">
        <div v-if="electionCandidates?.length > 0">
            <Toolbar class="mb-4">
                <template v-slot:start>
                    <div class="my-2">
                        <Button 
                            label="Ajouter un candidat" 
                            icon="pi pi-plus" 
                            class="p-button-success mr-2" 
                            @click="openCandidateAdditionForm"
                        ></Button>
                        <Button 
                            label="Supprimer la sélection" 
                            icon="pi pi-trash" 
                            class="p-button-danger" 
                            @click="removeSelectedCandidates" 
                            :disabled="!selectedCandidates || !selectedCandidates.length" 
                            :loading="loading"
                        ></Button>
                    </div>
                </template>
            </Toolbar>
            <DataTable 
                :value="electionCandidates"
                v-model:selection="selectedCandidates"
            >
                <template #header>
                    <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                        <h5 class="m-0">{{ election?.title }} - Liste des Candidats</h5>
                    </div>
                </template>
                <Column selectionMode="multiple" headerStyle="width: 3rem" />
                <Column field="firstname" header="Prénom"></Column>
                <Column field="lastname" header="Nom"></Column>
                <Column field="description" header="Description"></Column>

            </DataTable>
        </div>
        <div
            class="px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
            style="width: 600px; background-color: white;"
            v-else
        >
            <div>
                <div class="font-medium text-xl mt-2 mb-3">Aucun candidat à cette élection</div>
                <div class="font-medium">Cliquer sur le bouton suivant pour rajouter un premier candidat à l'élection à la base de données</div>
            </div>
            <div class="mt-4 mr-auto md:mt-0 md:mr-0">
                <Button 
                    class="p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised"
                    @click="openCandidateAdditionForm"
                >Ajouter</Button>
            </div>
        </div>

    </div>

</template>