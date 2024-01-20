<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import { ref, onMounted, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import { useIssuesStore } from '@/stores/issues';
    import { useOpinionsStore } from '@/stores/opinions';
    

    /* -----------
    Data init
    ----------- */
    const issuesStore = useIssuesStore();
    const opinionsStore = useOpinionsStore();
    onMounted(issuesStore.refreshIssues);

    /* -----------
    Issues deletion handling
    ----------- */
    const selectedIssues = ref(null);
    const loading = ref(false);
    const deleteSelectedIssues = () => {
        let ids = selectedIssues.value?.map(issue => issue.id);
        loading.value = true;
        API.issues.deleteIssues(ids)
            .then(() => {
                issuesStore.refreshIssues();
                selectedIssues.value = null;
            })
            .finally(() => loading.value = false);
    };

    /* ----------- 
    Issues upsert handling
    ----------- */
    const dialog = useDialog();
    const IssuesUpsertForm = defineAsyncComponent(() => import('@/components/IssuesUpsertForm.vue'));

    const openIssueUpsertForm = (issue = {}) => {
        dialog.open(IssuesUpsertForm, { 
            data: issue,
            onClose: issuesStore.refreshIssues,
            props: {
                modal: true
            }
        });
    };

    /* ----------- 
    Opinions upsert handling
    ----------- */
    const OpinionsUpsertForm = defineAsyncComponent(() => import('@/components/OpinionsUpsertForm.vue'));
    const openOpinionUpsertForm = (issue = {}) => {
        dialog.open(OpinionsUpsertForm, { 
            data: {
                issue_id: issue?.id
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
            <div class="card" v-if="issuesStore.issues?.length > 0">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button 
                                label="Ajouter un thème politique" 
                                icon="pi pi-plus" 
                                class="p-button-success mr-2" 
                                @click="openIssueUpsertForm"
                            ></Button>
                            <Button 
                                label="Supprimer la sélection" 
                                icon="pi pi-trash" 
                                class="p-button-danger" 
                                @click="deleteSelectedIssues" 
                                :disabled="!selectedIssues || !selectedIssues.length" 
                                :loading="loading"
                            ></Button>
                        </div>
                    </template>
                </Toolbar>
                <DataTable 
                    :value="issuesStore.issues"
                    v-model:selection="selectedIssues"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Thèmes</h5>
                        </div>
                    </template>
                    <Column selectionMode="multiple" headerStyle="width: 3rem" />
                    <Column headerStyle="min-width: 100px">
                        <template #body="{ data }">
                            <Button class="p-button-text p-button-rounded" icon="pi pi-pencil" @click="openIssueUpsertForm(data)"></Button>
                            <Button class="p-button-text p-button-rounded" icon="pi pi-megaphone" @click="openOpinionUpsertForm(data)"></Button>
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
                    <div class="font-medium text-xl mt-2 mb-3">Aucun thème</div>
                    <div class="font-medium">Cliquer sur le bouton suivant pour rajouter un premier thème à la base de données</div>
                </div>
                <div class="mt-4 mr-auto md:mt-0 md:mr-0">
                    <Button 
                        class="p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised"
                        @click="openIssueUpsertForm"
                    >Ajouter</Button>
                </div>
            </div>
        </div>
    </div>
</template>
