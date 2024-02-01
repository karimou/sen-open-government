
<script setup>

    import { toRefs, defineAsyncComponent, ref } from 'vue';
    import DataTable from 'primevue/datatable';
    import Toolbar from 'primevue/toolbar';
    import Column from 'primevue/column';
    import Button from 'primevue/button';

    import AppTableSkeleton from './AppTableSkeleton.vue';

    import { useDialog } from 'primevue/usedialog';

    /* -----------
    Props init
    ----------- */
    const props = defineProps({
        proposals: Array,
        opinion: Object,
        loading: {
            type: Boolean,
            default: false
        }
    });

    const { opinion, proposals, loading } = toRefs(props);

    const emit = defineEmits(['refresh']);

    /* ----------- 
    Proposal upsert handling
    ----------- */
    const dialog = useDialog();
    const BaseOpinionsTableProposalsTableUpsertForm = defineAsyncComponent(() => import('@/components/BaseOpinionsTableProposalsTableUpsertForm.vue'));
    const openProposalUpsertForm = (proposal) => {
        dialog.open(BaseOpinionsTableProposalsTableUpsertForm, { 
            data: { opinion, proposal },
            onClose: () => emit('refresh'),
            props: {
                modal: true
            }
        });
    };

    /* -----------
    Persons deletion handling
    ----------- */
    const selectedProposals = ref(null);
    const deleteSelection = () => console.log('deleteSelection');

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <AppTableSkeleton v-if="!!loading"/>
            <div class="card" v-else-if="proposals?.length > 0">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button 
                                label="Ajouter une proposition" 
                                icon="pi pi-plus" 
                                class="p-button-success mr-2" 
                                @click="() => openProposalUpsertForm()"
                            ></Button>
                            <Button 
                                label="Supprimer la sélection" 
                                icon="pi pi-trash" 
                                class="p-button-danger" 
                                @click="() => deleteSelection()"
                                :disabled="!selectedProposals || !selectedProposals.length" 
                                :loading="loading"
                            ></Button>
                        </div>
                    </template>
                </Toolbar>
                <DataTable 
                    :value="proposals"
                    v-model:selection="selectedProposals"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Propositions</h5>
                        </div>
                    </template>
                    <Column selectionMode="multiple" headerStyle="width: 3rem" />
                    <Column headerStyle="width: 60px">
                        <template #body="{ data }">
                            <Button class="p-button-text p-button-rounded" icon="pi pi-pencil" @click="openProposalUpsertForm(data)"></Button>
                        </template>

                    </Column>
                    <Column headerStyle="width: 80px" field="number" label="#"/>
                    <Column field="content"></Column>

                </DataTable>
            </div>

            <div
                class="px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                style="width: 600px; background-color: white;"
                v-else
            >
                <div>
                    <div class="font-medium text-xl mt-2 mb-3">Aucune proposition</div>
                    <div class="font-medium">Cliquer sur le bouton suivant pour rajouter une première proposition à la base de données</div>
                </div>
                <div class="mt-4 mr-auto md:mt-0 md:mr-0">
                    <Button 
                        class="p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised"
                        @click="() => openProposalUpsertForm()"
                    >Ajouter</Button>
                </div>
            </div>
        </div>
    </div>
</template>