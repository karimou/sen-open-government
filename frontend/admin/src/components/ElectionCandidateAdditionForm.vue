<script setup>
    import * as yup from 'yup';
    import { useForm } from 'vee-validate';
    import InputText from 'primevue/inputtext';
    import Textarea from 'primevue/textarea';
    import Button from 'primevue/button';
    import Editor from 'primevue/editor';
    import Dropdown from 'primevue/dropdown';

    import Message from 'primevue/message';
    import { computed, inject, onMounted, ref } from 'vue';
    import { API } from '@/services/api';

    import { usePersonsStore } from '@/stores/persons';
    import { useElectionsStore } from '@/stores/elections';


    const schema = yup.object({
        electionId: yup
            .number()
            .required(),
        personId: yup
            .number()
            .required()
    });
    const { handleSubmit, errors, defineField, setFieldValue } = useForm({validationSchema: schema});
    const [electionId, _electionIdAttrs ] = defineField('electionId');
    const [personId, _personIdAttrs ] = defineField('personId');
    
    const id = ref(null);
    const personsStore = usePersonsStore();
    const electionsStore = useElectionsStore();
    const initialValues = ref({});

    const dialogRef = inject('dialogRef');
    onMounted(() => {
        if (dialogRef.value.data.electionId) setFieldValue('electionId', dialogRef.value.data.electionId);
        if (dialogRef.value.data.personId) setFieldValue('personId', dialogRef.value.data.personId) 
        if (!personsStore.persons) personsStore.refreshPersons();
        if (!electionsStore.elections) electionsStore.refreshElections();
    });

    const personsNames = computed(() => {
        let dict = {};
        personsStore.persons.forEach(person => dict[person.id] = `${ person.firstname } ${ person.lastname }`);
        return dict;
    });


    const loading = ref(false);
    const onSubmit = handleSubmit((values) => {
        loading.value = true;
        API.elections.addElectionCandidate({electionId: electionId.value, personId: personId.value})
            .then(result => {
                dialogRef.value.close('success');
            })
            .finally(() => loading.value = false);
        
        
    });

</script>
<template>
    <div style="width: 350px">
        <h5>Ajouter un candidat</h5>
        <form @submit="onSubmit" :initial-values="initialValues.value">
            <div class="field">
                <label for="title">Candidat</label>
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
                >
                    <template #value="slotProps">
                        <span v-if="slotProps.value">
                            {{ personsNames[slotProps.value] }}
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
            </div>
            <div class="field ">
                <label for="title">Élection</label>

                <Dropdown
                    v-if="!electionsStore.elections"
                    loading
                    placeholder="Chargement en cours..."
                    class="w-full"

                />
                <Dropdown
                    v-else
                    v-model="electionId"
                    :options="electionsStore.elections"
                    optionLabel="title"
                    optionValue="id"
                    placeholder="Choisir une élection"
                    class="w-full"
                />
            </div>
            <Button type="submit" label="Soumettre" class="w-full" :loading="loading"></Button>
        </form>
        <Message v-for="(errorMessage, index) of errors" severity="error" :key="index">{{ errorMessage }}</Message>
        
    </div>
    
</template>