<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import { ref, onMounted, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import { usePersonsStore } from '@/stores/persons';
    import { useOpinionsStore } from '@/stores/opinions';
    

    /* -----------
    Data init
    ----------- */
    const personsStore = usePersonsStore();
    const opinionsStore = useOpinionsStore();
    onMounted(personsStore.refreshPersons);

    /* -----------
    Persons deletion handling
    ----------- */
    const selectedPersons = ref(null);
    const loading = ref(false);
    const deleteSelectedPersons = () => {
        let ids = selectedPersons.value?.map(person => person.id);
        loading.value = true;
        API.persons.deletePersons(ids)
            .then(() => {
                personsStore.refreshPersons();
                selectedPersons.value = null;
            })
            .finally(() => loading.value = false);
    };

    /* ----------- 
    Persons upsert handling
    ----------- */
    const dialog = useDialog();
    const PersonsUpsertForm = defineAsyncComponent(() => import('@/components/PersonsUpsertForm.vue'));

    const openPersonUpsertForm = (person = {}) => {
        dialog.open(PersonsUpsertForm, { 
            data: person,
            onClose: personsStore.refreshPersons,
            props: {
                modal: true
            }
        });
    };


    /* ----------- 
    Opinions upsert handling
    ----------- */
    const OpinionsUpsertForm = defineAsyncComponent(() => import('@/components/OpinionsUpsertForm.vue'));
    const openOpinionUpsertForm = (person = {}) => {
        dialog.open(OpinionsUpsertForm, { 
            data: {
                author_id: person?.id
            },
            onClose: opinionsStore.refreshOpinions,
            props: {
                modal: true
            }
        });
    };
    
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card" v-if="personsStore.persons?.length > 0">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button 
                                label="Ajouter une personne" 
                                icon="pi pi-plus" 
                                class="p-button-success mr-2" 
                                @click="openPersonUpsertForm"
                            ></Button>
                            <Button 
                                label="Supprimer la sélection" 
                                icon="pi pi-trash" 
                                class="p-button-danger" 
                                @click="deleteSelectedPersons" 
                                :disabled="!selectedPersons || !selectedPersons.length" 
                                :loading="loading"
                            ></Button>
                        </div>
                    </template>
                </Toolbar>
                <DataTable 
                    :value="personsStore.persons"
                    v-model:selection="selectedPersons"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Personnes</h5>
                        </div>
                    </template>
                    <Column selectionMode="multiple" headerStyle="width: 3rem" />
                    <Column headerStyle="min-width: 100px">
                        <template #body="{ data }">
                            <Button class="p-button-text p-button-rounded" icon="pi pi-pencil" @click="openPersonUpsertForm(data)"></Button>
                            <Button class="p-button-text p-button-rounded" icon="pi pi-megaphone" @click="openOpinionUpsertForm(data)"></Button>
                        </template>

                    </Column>
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
                    <div class="font-medium text-xl mt-2 mb-3">Aucune persone</div>
                    <div class="font-medium">Cliquer sur le bouton suivant pour rajouter une première personne à la base de données</div>
                </div>
                <div class="mt-4 mr-auto md:mt-0 md:mr-0">
                    <Button 
                        class="p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised"
                        @click="openPersonUpsertForm"
                    >Ajouter</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blue-box {
    width: 500px; 
    border-radius: 1rem; 
    background: linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1c80cf 47.88%, #ffffff 100.01%)
}
</style>