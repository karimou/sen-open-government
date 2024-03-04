<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import Dropdown from 'primevue/dropdown';
    import Avatar from 'primevue/avatar';
    import { ref, onMounted, toRefs, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import AppTableSkeleton from '@/components/AppTableSkeleton.vue';

    import { useDocumentPagesStore } from '@/stores/documentpages';
    

    /* -----------
    Props init
    ----------- */
    const props = defineProps({
        parentId: Number,
        parentTitle: String
    });
    const { parentId, parentTitle } = toRefs(props);


    /* -----------
    Data init
    ----------- */
    const tableLoading = ref(false);
    const documentPages = ref([]);
    const documentPagesStore = useDocumentPagesStore();

    const fetchPages = () => {
        tableLoading.value = true;
        if (parentId.value) {
            API.documentPages.getDocument(parentId.value)
                .then(data => documentPages.value = data.children || [])
                .then(() => tableLoading.value = false);
        } else {
            documentPagesStore.refreshDocumentPages()
                .then(() => documentPages.value = documentPagesStore.documentPages)
                .then(() => tableLoading.value = false);
        }
    };
    onMounted(() => {
        fetchPages();
    });

    /* -----------
    DocumentPages deletion handling
    ----------- */
    const loading = ref(false);
    const selectedDocumentPages = ref(null);
    const deleteSelectedDocumentPages = () => {
        let ids = selectedDocumentPages.value?.map(documentPage => documentPage.id);
        loading.value = true;
        API.documentPages.deleteDocumentPages(ids)
            .then(() => {
                fetchPages();
                selectedDocumentPages.value = null;
            })
            .finally(() => loading.value = false);
    };

    /* ----------- 
    DocumentPages upsert handling
    ----------- */
    const dialog = useDialog();
    const DocumentPagesUpsertForm = defineAsyncComponent(() => import('@/components/DocumentPagesUpsertForm.vue'));
    const openDocumentPageUpsertForm = (documentPage = {}) => {
        documentPage.parent_id = parentId.value;
        dialog.open(DocumentPagesUpsertForm, { 
            data: documentPage,
            onClose: () => fetchPages(),
            props: {
                modal: true
            }
        });
    };

    
    /* ----------- 
    Proposals display
    ----------- */
    const BaseDocumentPagesTableChildrenDialog = defineAsyncComponent(() => import('@/components/BaseDocumentPagesTableChildrenDialog.vue'));
    const displayChildren = (documentPage) => {
        dialog.open(BaseDocumentPagesTableChildrenDialog, { 
            data: documentPage,
            onClose: () => fetchPages(),
            props: {
                modal: true
            }
        });
    };
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <AppTableSkeleton v-if="tableLoading"/>
            <div class="card" v-else-if="documentPages?.length > 0">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button 
                                label="Ajouter un document" 
                                icon="pi pi-plus" 
                                class="p-button-success mr-2" 
                                @click="openDocumentPageUpsertForm()"
                            ></Button>
                            <Button 
                                label="Supprimer la sélection" 
                                icon="pi pi-trash" 
                                class="p-button-danger" 
                                @click="deleteSelectedDocumentPages()" 
                                :disabled="!selectedDocumentPages || !selectedDocumentPages.length" 
                                :loading="loading"
                            ></Button>
                            
                        </div>
                    </template>
                </Toolbar>
                <DataTable 
                    :value="documentPages"
                    tableStyle="min-width: 50rem"
                    v-model:selection="selectedDocumentPages"
                    sortMode="single" 
                    :sortOrder="1"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">{{ parentTitle ? `${ parentTitle } - contenu` : 'Documents' }}</h5>
                        </div>
                    </template>
                    <Column selectionMode="multiple" headerStyle="width: 3rem" />
                    <Column headerStyle="width: 160px">
                        <template #body="{ data }">
                            <Button class="p-button-text p-button-rounded" icon="pi pi-pencil" @click="openDocumentPageUpsertForm(data)"></Button>
                            <Button class="p-button-text p-button-rounded" icon="pi pi-book" @click="displayChildren(data)"></Button>
                        </template>
                    </Column>
                    <Column field="title" header="Titre" />
                    <Column field="summary" header="Résumé" headerStyle="width: 500px">
                        <template #body="{ data }">
                            <p class="truncate l3">
                                {{ data.summary }}
                            </p>
                        </template>
                    </Column>

                </DataTable>
            </div>

            <div
                class="px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                style="width: 600px; background-color: white;"
                v-else
            >
                <div>
                    <div class="font-medium text-xl mt-2 mb-3">Aucun document</div>
                    <div class="font-medium">Cliquer sur le bouton suivant pour rajouter une première document à la base de données</div>
                </div>
                <div class="mt-4 mr-auto md:mt-0 md:mr-0">
                    <Button 
                        class="p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised"
                        @click="openDocumentPageUpsertForm()"
                    >Ajouter</Button>
                </div>
            </div>
        </div>
    </div>
</template>
