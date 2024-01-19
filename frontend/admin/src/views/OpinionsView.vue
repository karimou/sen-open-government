<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import { ref, onMounted, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import { useOpinionsStore } from '@/stores/opinions';
    

    const opinionsStore = useOpinionsStore();

    onMounted(opinionsStore.refreshOpinions);

    const selectedOpinions = ref(null);

    const loading = ref(false);
    const deleteSelectedOpinions = () => {
        let ids = selectedOpinions.value?.map(opinion => opinion.id);
        loading.value = true;
        API.opinions.deleteOpinions(ids)
            .then(() => {
                opinionsStore.refreshOpinions();
                selectedOpinions.value = null;
            })
            .finally(() => loading.value = false);
    };

    const dialog = useDialog();
    const OpinionsUpsertForm = defineAsyncComponent(() => import('@/components/OpinionsUpsertForm.vue'));

    const openOpinionUpsertForm = (opinion = {}) => {
        dialog.open(OpinionsUpsertForm, { 
            data: opinion,
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
            <div class="card" v-if="opinionsStore.opinions?.length > 0">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button 
                                label="Ajouter une opinion" 
                                icon="pi pi-plus" 
                                class="p-button-success mr-2" 
                                @click="openOpinionUpsertForm"
                            ></Button>
                            <Button 
                                label="Supprimer la sélection" 
                                icon="pi pi-trash" 
                                class="p-button-danger" 
                                @click="deleteSelectedOpinions" 
                                :disabled="!selectedOpinions || !selectedOpinions.length" 
                                :loading="loading"
                            ></Button>
                        </div>
                    </template>
                </Toolbar>
                <DataTable 
                    :value="opinionsStore.opinions"
                    v-model:selection="selectedOpinions"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Sujets politiques</h5>
                        </div>
                    </template>
                    <Column selectionMode="multiple" headerStyle="width: 3rem" />
                    <Column headerStyle="min-width: 100px">
                        <template #body="{ data }">
                            <Button class="p-button-text p-button-rounded" icon="pi pi-pencil" @click="openOpinionUpsertForm(data)"></Button>
                        </template>
                    </Column>
                    <Column field="title" header="Titre"></Column>
                    <Column field="short_description" header="Description"></Column>

                </DataTable>
            </div>

            <div
                class="px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                style="width: 600px; background-color: white;"
                v-else
            >
                <div>
                    <div class="font-medium text-xl mt-2 mb-3">Aucune opinion</div>
                    <div class="font-medium">Cliquer sur le bouton suivant pour rajouter une première élection à la base de données</div>
                </div>
                <div class="mt-4 mr-auto md:mt-0 md:mr-0">
                    <Button 
                        class="p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised"
                        @click="openOpinionUpsertForm"
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