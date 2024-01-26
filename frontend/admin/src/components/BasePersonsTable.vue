<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import Avatar from 'primevue/avatar';
    import { ref, defineAsyncComponent, toRefs } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import AppTableSkeleton from '@/components/AppTableSkeleton.vue';
    

    /* -----------
    Props init
    ----------- */
    const props = defineProps({
        persons: Array,
        addFunction: {
            type: Function,
            default: null
        },
        deleteFunction: {
            type: Function,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        },
        hideDescription: {
            type: Boolean,
            default: false
        }
    });
    const { persons, loading, addFunction, deleteFunction, hideDescription } = toRefs(props);
    const emit = defineEmits(['refresh']);

    /* -----------
    Persons deletion handling
    ----------- */
    const selectedPersons = ref(null);
    const deleteSelectedPersons = () => {
        let ids = selectedPersons.value?.map(person => person.id);
        loading.value = true;
        API.persons.deletePersons(ids)
            .then(() => {
                emit('refresh');
                selectedPersons.value = null;
            })
            .finally(() => loading.value = false);
    };
    const deleteFn = () => {
        if (deleteFunction.value) {
            loading.value = true;
            deleteFunction.value(selectedPersons.value)
                .then(() => loading.value = false)
                .then(() => emit('refresh'));
        } else {
            return deleteSelectedPersons();
        }
    };

    /* ----------- 
    Addition / Edit handling
    ----------- */
    const dialog = useDialog();
    const PersonsUpsertForm = defineAsyncComponent(() => import('@/components/PersonsUpsertForm.vue'));

    const openPersonUpsertForm = (person = {}) => {
        dialog.open(PersonsUpsertForm, { 
            data: person,
            onClose: () => emit('refresh'),
            props: {
                modal: true
            }
        });
    };

    const addFn = () => {
        if (addFunction.value) {
            return addFunction.value();
        } else {
            return openPersonUpsertForm();
        }
    };


    /* ----------- 
    Opinions upsert handling
    ----------- */
    const PersonsOpinions = defineAsyncComponent(() => import('@/components/PersonsOpinions.vue'));
    const displayPersonOpinions = (person = {}) => {
        dialog.open(PersonsOpinions, { 
            data: person,
            props: {
                modal: true
            }
        });
    };
    
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <AppTableSkeleton v-if="!!loading"/>
            <div class="card" v-else-if="persons?.length > 0">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button 
                                label="Ajouter une personne" 
                                icon="pi pi-plus" 
                                class="p-button-success mr-2" 
                                @click="() => addFn()"
                            ></Button>
                            <Button 
                                label="Supprimer la sélection" 
                                icon="pi pi-trash" 
                                class="p-button-danger" 
                                @click="() => deleteFn()"
                                :disabled="!selectedPersons || !selectedPersons.length" 
                                :loading="loading"
                            ></Button>
                        </div>
                    </template>
                </Toolbar>
                <DataTable 
                    :value="persons"
                    v-model:selection="selectedPersons"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Personnes</h5>
                        </div>
                    </template>
                    <Column selectionMode="multiple" headerStyle="width: 3rem" />
                    <Column headerStyle="width: 120px">
                        <template #body="{ data }">
                            <Button class="p-button-text p-button-rounded" icon="pi pi-pencil" @click="openPersonUpsertForm(data)"></Button>
                            <Button class="p-button-text p-button-rounded" icon="pi pi-megaphone" @click="displayPersonOpinions(data)"></Button>
                        </template>

                    </Column>
                    <Column field="photo" headerStyle="width: 100px">
                        <template #body="{ data }">
                            <Avatar 
                                class="contained-image"
                                v-if="data.photo"
                                :image="data.photo"
                                size="xlarge" 
                                shape="rectangle" 
                            />
                        </template>
                    </Column>
                    <Column field="firstname" header="Prénom"></Column>
                    <Column field="lastname" header="Nom"></Column>
                    <Column field="description" header="Description" v-if="!hideDescription"></Column>

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
                        @click="() => addFn()"
                    >Ajouter</Button>
                </div>
            </div>
        </div>
    </div>
</template>
