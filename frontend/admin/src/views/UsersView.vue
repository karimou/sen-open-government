<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
    import { ref, onMounted, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';
    import { useDialog } from 'primevue/usedialog';
    import { useUsersStore } from '@/stores/users';
    import AppTableSkeleton from '@/components/AppTableSkeleton.vue';
    

    /* -----------
    Data init
    ----------- */
    const tableLoading = ref(false);
    const usersStore = useUsersStore();
    onMounted(() => {
        tableLoading.value = true;
        usersStore.refreshUsers()
            .then(() => tableLoading.value = false);
    });

    /* -----------
    Users deletion handling
    ----------- */
    const selectedUsers = ref(null);
    const loading = ref(false);
    const deleteSelectedUsers = () => {
        let ids = selectedUsers.value?.map(user => user.id);
        loading.value = true;
        API.users.deleteUsers(ids)
            .then(() => {
                usersStore.refreshUsers();
                selectedUsers.value = null;
            })
            .finally(() => loading.value = false);
    };

    /* ----------- 
    Users upsert handling
    ----------- */
    const dialog = useDialog();
    const UsersUpsertForm = defineAsyncComponent(() => import('@/components/UsersUpsertForm.vue'));

    const openUserUpsertForm = (user = {}) => {
        dialog.open(UsersUpsertForm, { 
            data: user,
            onClose: usersStore.refreshUsers,
            props: {
                modal: true
            }
        });
    };

    
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <AppTableSkeleton v-if="!!tableLoading"/>
            <div class="card" v-else-if="usersStore.users?.length > 0">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button 
                                label="Ajouter un utilisateur" 
                                icon="pi pi-plus" 
                                class="p-button-success mr-2" 
                                @click="openUserUpsertForm"
                            ></Button>
                            <Button 
                                label="Supprimer la sélection" 
                                icon="pi pi-trash" 
                                class="p-button-danger" 
                                @click="deleteSelectedUsers" 
                                :disabled="!selectedUsers || !selectedUsers.length" 
                                :loading="loading"
                            ></Button>
                        </div>
                    </template>
                </Toolbar>
                <DataTable 
                    :value="usersStore.users"
                    v-model:selection="selectedUsers"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Utilisateurs</h5>
                        </div>
                    </template>
                    <Column selectionMode="multiple" headerStyle="width: 3rem" />
                    <Column headerStyle="width: 60px">
                        <template #body="{ data }">
                            <Button class="p-button-text p-button-rounded" icon="pi pi-pencil" @click="openUserUpsertForm(data)"></Button>
                        </template>
                    </Column>
                    <Column field="username" header="Nom d'utilisateur"></Column>
                    <Column field="email" header="email"></Column>
                    <Column field="phone" header="Numéro de téléphone"></Column>

                </DataTable>
            </div>

            <div
                class="px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                style="width: 600px; background-color: white;"
                v-else
            >
                <div>
                    <div class="font-medium text-xl mt-2 mb-3">Aucun utilisateur</div>
                    <div class="font-medium">Cliquer sur le bouton suivant pour rajouter un premier utilisateur à la base de données</div>
                </div>
                <div class="mt-4 mr-auto md:mt-0 md:mr-0">
                    <Button 
                        class="p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised"
                        @click="openUserUpsertForm"
                    >Ajouter</Button>
                </div>
            </div>
        </div>
    </div>
</template>
