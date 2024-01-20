<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import Dropdown from 'primevue/dropdown';
    import { ref, computed, onMounted, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import { useOpinionsStore } from '@/stores/opinions';
    import AppTableSkeleton from '@/components/AppTableSkeleton.vue';
    

    /* -----------
    Data init
    ----------- */
    const tableLoading = ref(false);
    const opinionsStore = useOpinionsStore();
    onMounted(() => {
        tableLoading.value = true;
        opinionsStore.refreshOpinions()
            .then(() => tableLoading.value = false);
    });

    /* -----------
    Opinions deletion handling
    ----------- */
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

    /* ----------- 
    Opinions upsert handling
    ----------- */
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

    
    /* -----------
    Data reformatting
    ----------- */
    const formatName = (author) => `${ author.firstname } ${ author.lastname }`;
    const formattedOpinions = computed(() => opinionsStore.opinions.map(opinion => ({
        ...opinion,
        author: {
            ...opinion.author,
            name: formatName(opinion.author)
        }
    })));

    /* -----------
    Data grouping
    ----------- */
    const expandedRowGroups = ref();

    const groupingHeader = ref('author.name');

    const groupingHeaders = [
        {field: 'author.name', label: 'Auteur'},
        {field: 'issue.title', label: 'Thème'}
    ];
    
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <AppTableSkeleton v-if="!!tableLoading"/>
            <div class="card" v-else-if="opinionsStore.opinions?.length > 0">
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
                    <template v-slot:end>
                        <div class="p-float-label">
                            <Dropdown
                                :options="groupingHeaders"
                                v-model="groupingHeader"
                                optionLabel="label"
                                optionValue="field"
                            />
                            <label>Grouper par:</label>
                        </div>

                    </template>
                </Toolbar>
                <DataTable 
                    :key="groupingHeader"
                    :value="formattedOpinions"
                    tableStyle="min-width: 50rem"
                    v-model:selection="selectedOpinions"
                    v-model:expandedRowGroups="expandedRowGroups"
                    expandableRowGroups
                    rowGroupMode="subheader"
                    :groupRowsBy="groupingHeader" 
                    sortMode="single" 
                    :sortField="groupingHeader" 
                    :sortOrder="1"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Opinions</h5>
                        </div>
                    </template>
                    <Column selectionMode="multiple" headerStyle="width: 3rem" />
                    <Column headerStyle="min-width: 100px">
                        <template #body="{ data }">
                            <Button class="p-button-text p-button-rounded" icon="pi pi-pencil" @click="openOpinionUpsertForm(data)"></Button>
                        </template>
                    </Column>
                    <template #groupheader="slotProps">
                        <template v-if="groupingHeader == 'author.name'">
                            <img v-if="slotProps.data.author.photo" :alt="slotProps.data.author.name" :src="slotProps.data.author.photo" width="32" style="vertical-align: middle" class="ml-2" />
                            <span class="vertical-align-middle ml-2 font-bold line-height-3">{{ slotProps.data.author.name }}</span>
                        </template>

                        <template v-else-if="groupingHeader == 'issue.title'">
                            <span class="vertical-align-middle ml-2 font-bold line-height-3">{{ slotProps.data.issue.title }}</span>
                        </template>
                    </template>
                    <Column field="author.name" header="Auteur" />
                    <Column field="issue.title" header="Sujet" />
                    <Column field="summary" header="Résumé"></Column>

                </DataTable>
            </div>

            <div
                class="px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                style="width: 600px; background-color: white;"
                v-else
            >
                <div>
                    <div class="font-medium text-xl mt-2 mb-3">Aucune opinion</div>
                    <div class="font-medium">Cliquer sur le bouton suivant pour rajouter une première opinion à la base de données</div>
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
