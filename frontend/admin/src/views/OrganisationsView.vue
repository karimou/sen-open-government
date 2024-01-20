<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import { ref, onMounted, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import { useOrganisationsStore } from '@/stores/organisations';
    

    /* -----------
    Data init
    ----------- */
    const organisationsStore = useOrganisationsStore();
    onMounted(organisationsStore.refreshOrganisations);

    /* -----------
    Organisations deletion handling
    ----------- */
    const selectedOrganisations = ref(null);
    const loading = ref(false);
    const deleteSelectedOrganisations = () => {
        let ids = selectedOrganisations.value?.map(organisation => organisation.id);
        loading.value = true;
        API.organisations.deleteOrganisations(ids)
            .then(() => {
                organisationsStore.refreshOrganisations();
                selectedOrganisations.value = null;
            })
            .finally(() => loading.value = false);
    };

    /* -----------
    Organisations upsert handling
    ----------- */
    const dialog = useDialog();
    const OrganisationsUpsertForm = defineAsyncComponent(() => import('@/components/OrganisationsUpsertForm.vue'));
    const openOrganisationUpsertForm = (organisation = {}) => {
        dialog.open(OrganisationsUpsertForm, { 
            data: organisation,
            onClose: organisationsStore.refreshOrganisations,
            props: {
                modal: true
            }
        });
    };
    
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card" v-if="organisationsStore.organisations?.length > 0">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button 
                                label="Ajouter une organisation" 
                                icon="pi pi-plus" 
                                class="p-button-success mr-2" 
                                @click="openOrganisationUpsertForm"
                            ></Button>
                            <Button 
                                label="Supprimer la sélection" 
                                icon="pi pi-trash" 
                                class="p-button-danger" 
                                @click="deleteSelectedOrganisations" 
                                :disabled="!selectedOrganisations || !selectedOrganisations.length" 
                                :loading="loading"
                            ></Button>
                        </div>
                    </template>
                </Toolbar>
                <DataTable 
                    :value="organisationsStore.organisations"
                    v-model:selection="selectedOrganisations"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Organisations</h5>
                        </div>
                    </template>
                    <Column selectionMode="multiple" headerStyle="width: 3rem" />
                    <Column headerStyle="min-width: 100px">
                        <template #body="{ data }">
                            <Button class="p-button-text p-button-rounded" icon="pi pi-pencil" @click="openOrganisationUpsertForm(data)"></Button>
                        </template>
                    </Column>
                    <Column field="name" header="Nom"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column field="description" header="Description"></Column>
                    <Column field="twitter" header="Twitter"></Column>
                    <Column field="facebook" header="Facebook"></Column>
                    <Column field="instagram" header="Instagram"></Column>
                    <Column field="website" header="Website"></Column>
                    <Column field="address" header="Adresse"></Column>
                    <Column field="contact_phone" header="Contact (Téléphone)"></Column>
                    <Column field="contact_email" header="Contact (email)"></Column>
                    <Column field="parent_organisation_id" header="Parent"></Column>

                </DataTable>
            </div>

            <div
                class="px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                style="width: 600px; background-color: white;"
                v-else
            >
                <div>
                    <div class="font-medium text-xl mt-2 mb-3">Aucune organisation</div>
                    <div class="font-medium">Cliquer sur le bouton suivant pour rajouter une première organisation à la base de données</div>
                </div>
                <div class="mt-4 mr-auto md:mt-0 md:mr-0">
                    <Button 
                        class="p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised"
                        @click="openOrganisationUpsertForm"
                    >Ajouter</Button>
                </div>
            </div>
        </div>
    </div>
</template>
