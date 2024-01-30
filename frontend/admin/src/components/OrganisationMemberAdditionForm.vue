<script setup>
    import * as yup from 'yup';
    import { useForm } from 'vee-validate';
    import Button from 'primevue/button';
    import Dropdown from 'primevue/dropdown';
    import InputText from 'primevue/inputtext';

    import Message from 'primevue/message';
    import { computed, inject, onMounted, ref, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';

    import { usePersonsStore } from '@/stores/persons';
    import { useOrganisationsStore } from '@/stores/organisations';

    import { useDialog } from 'primevue/usedialog';


    /* -----------
    Form schema and initialisation
    ----------- */
    const schema = yup.object({
        organisationId: yup
            .number()
            .required(),
        personId: yup
            .number()
            .required(),
            role: yup
            .string()
    });
    const { handleSubmit, errors, defineField, setFieldValue } = useForm({validationSchema: schema});
    const [organisationId, _organisationIdAttrs ] = defineField('organisationId');
    const [personId, _personIdAttrs ] = defineField('personId');
    const [role, _roleAttrs ] = defineField('role');
    
    /* ----------- 
    Data init
    ----------- */
    const personsStore = usePersonsStore();
    const organisationsStore = useOrganisationsStore();
    const initialValues = ref({});

    const dialogRef = inject('dialogRef');
    onMounted(() => {
        if (dialogRef.value.data.organisationId) setFieldValue('organisationId', dialogRef.value.data.organisationId);
        if (dialogRef.value.data.personId) setFieldValue('personId', dialogRef.value.data.personId) 
        if (dialogRef.value.data.role) setFieldValue('personId', dialogRef.value.data.role) 
        if (!personsStore.persons) personsStore.refreshPersons();
        if (!organisationsStore.organisations) organisationsStore.refreshOrganisations();
    });

    /* ----------- 
    Submit handling
    ----------- */
    const loading = ref(false);
    const onSubmit = handleSubmit((values) => {
        loading.value = true;
        API.organisations.addOrganisationMember({organisationId: organisationId.value, personId: personId.value, role: role.value})
            .then(result => {
                dialogRef.value.close('success');
            })
            .finally(() => loading.value = false);
        
        
    });

    /* ----------- 
    Persons upsert handling
    ----------- */
    const dialog = useDialog();
    const PersonsUpsertForm = defineAsyncComponent(() => import('@/components/PersonsUpsertForm.vue'));

    const openPersonUpsertForm = (person = {}) => {
        dialog.open(PersonsUpsertForm, { 
            data: person,
            onClose: (props) => {
                if (props?.data == 'success') personsStore.refreshPersons();
            },
            props: {
                modal: true
            }
        });
    };


</script>
<template>
    <div style="width: 350px">
        <h5>Ajouter un membre</h5>
        <form @submit="onSubmit" :initial-values="initialValues.value">
            <div class="field">
                <label for="title">Membre</label>
                <Dropdown
                    v-if="!personsStore.persons"
                    loading
                    placeholder="Chargement en cours..."
                    class="w-full"
                    
                />
                <Dropdown
                    v-else
                    v-model="personId"
                    :options="personsStore.persons"
                    optionLabel="firstname"
                    optionValue="id"
                    placeholder="Choisir une personne"
                    class="w-full"
                    filter
                >
                    <template #value="slotProps">
                        <span v-if="slotProps.value">
                            {{ personsStore.personsNames[slotProps.value] }}
                        </span>
                        <span v-else>
                            {{  slotProps.placeholder }}
                        </span>
                    </template>
                    <template #option="slotProps">
                        <span v-if="slotProps.option">
                            {{ slotProps.option.firstname }} {{ slotProps.option.lastname }}
                        </span>
                        <span v-else>
                            {{  slotProps.placeholder }}
                        </span>
                    </template>
                </Dropdown>
                <Button 
                    label="Ajouter une personne" 
                    icon="pi pi-plus" 
                    text
                    @click="openPersonUpsertForm"
                ></Button>
            </div>
            <div class="field ">
                <label for="title">Organisation</label>

                <Dropdown
                    v-if="!organisationsStore.organisations"
                    loading
                    placeholder="Chargement en cours..."
                    class="w-full"

                />
                <Dropdown
                    v-else
                    v-model="organisationId"
                    :options="organisationsStore.organisations"
                    optionLabel="name"
                    optionValue="id"
                    placeholder="Choisir une organisation"
                    class="w-full"
                    filter
                />
            </div>
            <div class="field">
                <label for="role">Role</label>
                <InputText
                    id="role"
                    type="text"
                    v-model="role"
                    class="w-full"
                />
            </div>
            <Button type="submit" label="Soumettre" class="w-full" :loading="loading"></Button>
        </form>
        <Message v-for="(errorMessage, index) of errors" severity="error" :key="index">{{ errorMessage }}</Message>
        
    </div>
    
</template>