<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import Dropdown from 'primevue/dropdown';
    import Avatar from 'primevue/avatar';
    import { ref, computed, toRefs, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import AppTableSkeleton from '@/components/AppTableSkeleton.vue';
    

    /* -----------
    Props init
    ----------- */
    const props = defineProps({
        opinions: Array,
        personId: Number,
        issueId: Number,
        defaultGroupingHeader: {
            type: String,
            default: 'author.name'
        },
        group: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    });
    const { opinions, group, personId, issueId, loading, defaultGroupingHeader } = toRefs(props);
    const emit = defineEmits(['refresh']);

    /* -----------
    Opinions deletion handling
    ----------- */
    const selectedOpinions = ref(null);
    const deleteSelectedOpinions = () => {
        let ids = selectedOpinions.value?.map(opinion => opinion.id);
        loading.value = true;
        API.opinions.deleteOpinions(ids)
            .then(() => {
                emit('refresh');
                selectedOpinions.value = null;
            })
            .finally(() => loading.value = false);
    };

    /* ----------- 
    Opinions upsert handling
    ----------- */
    const dialog = useDialog();
    const OpinionsUpsertForm = defineAsyncComponent(() => import('@/components/OpinionsUpsertForm.vue'));
    const openOpinionUpsertForm = (opinion = {author_id: personId.value, issue_id: issueId.value}) => {
        dialog.open(OpinionsUpsertForm, { 
            data: opinion,
            onClose: () => emit('refresh'),
            props: {
                modal: true
            }
        });
    };

    /* ----------- 
    CSV Import handling
    ----------- */
    const AppOpinionsCsvImport = defineAsyncComponent(() => import('@/components/AppOpinionsCsvImport.vue'));
    const openOpinionsCsvImportDialog = () => {
        dialog.open(AppOpinionsCsvImport, { 
            data: { personId: personId.value, issueId: issueId.value},
            onClose: () => emit('refresh'),
            props: {
                modal: true
            }
        });
    };

    
    /* -----------
    Data reformatting
    ----------- */
    const formatName = (author) => `${ author.firstname } ${ author.lastname }`;
    const formattedOpinions = computed(() => opinions.value.map(opinion => ({
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
    const groupingHeader = ref(defaultGroupingHeader.value);
    const groupingHeaders = [
        {field: 'author.name', label: 'Auteur'},
        {field: 'issue.title', label: 'Thème'}
    ];
    
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <AppTableSkeleton v-if="!!loading"/>
            <div class="card" v-else-if="opinions?.length > 0">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button 
                                label="Ajouter une opinion" 
                                icon="pi pi-plus" 
                                class="p-button-success mr-2" 
                                @click="openOpinionUpsertForm()"
                            ></Button>
                            <Button 
                                label="Import un CSV" 
                                icon="pi pi-file-import" 
                                class="p-button-primary mr-2" 
                                @click="openOpinionsCsvImportDialog()"
                            ></Button>
                            <Button 
                                label="Supprimer la sélection" 
                                icon="pi pi-trash" 
                                class="p-button-danger" 
                                @click="deleteSelectedOpinions()" 
                                :disabled="!selectedOpinions || !selectedOpinions.length" 
                                :loading="loading"
                            ></Button>
                            
                        </div>
                    </template>
                    <template v-slot:end v-if="group">
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
                    :expandableRowGroups="group"
                    :rowGroupMode="group ? 'subheader' : null"
                    :groupRowsBy="group ? groupingHeader : null"
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
                    <Column headerStyle="width: 60px">
                        <template #body="{ data }">
                            <Button class="p-button-text p-button-rounded" icon="pi pi-pencil" @click="openOpinionUpsertForm(data)"></Button>
                        </template>
                    </Column>
                    <template #groupheader="slotProps" v-if="group">
                        <template v-if="groupingHeader == 'author.name'">
                            <Avatar 
                                class="contained-image ml-2 vertical-align-middle "
                                v-if="slotProps.data.author.photo"
                                :image="slotProps.data.author.photo"
                                width="32"
                                shape="circle" 
                            />
                            <span class="vertical-align-middle ml-2 font-bold line-height-3">{{ slotProps.data.author.name }}</span>
                        </template>

                        <template v-else-if="groupingHeader == 'issue.title'">
                            <Avatar 
                                class="contained-image ml-2 vertical-align-middle "
                                v-if="slotProps.data.issue.photo"
                                :image="slotProps.data.issue.photo"
                                width="32"
                                shape="circle" 
                            />
                            <span class="vertical-align-middle ml-2 font-bold line-height-3">{{ slotProps.data.issue.title }}</span>
                        </template>
                    </template>
                    <Column field="author.name" header="Auteur" />
                    <Column field="issue.title" header="Sujet" />
                    <Column field="summary" header="Résumé" headerStyle="width: 500px" bodyStyle="white-space: pre-wrap" bodyClass="truncate l3"/>

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
                        @click="openOpinionUpsertForm()"
                    >Ajouter</Button>
                </div>
            </div>
        </div>
    </div>
</template>
