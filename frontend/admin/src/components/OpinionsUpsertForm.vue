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
    import { useIssuesStore } from '@/stores/issues';


    const schema = yup.object({
        author_id: yup
            .number()
            .required(),
        issue_id: yup
            .number()
            .required(),
        summary: yup
            .string()
            .required(),
        content: yup
            .string()
    });
    const { handleSubmit, errors, defineField, setFieldValue } = useForm({validationSchema: schema});
    const [author_id, _author_idAttrs ] = defineField('author_id');
    const [issue_id, _issue_idAttrs ] = defineField('issue_id');
    const [summary, _summaryAttrs ] = defineField('summary');
    const [content, _contentAttrs ] = defineField('content');
    
    const id = ref(null);
    const personsStore = usePersonsStore();
    const issuesStore = useIssuesStore();
    const initialValues = ref({});

    const dialogRef = inject('dialogRef');
    onMounted(() => {
        ['author_id', 'issue_id', 'summary', 'content'].forEach(field => { if (dialogRef.value.data[field]) setFieldValue(field, dialogRef.value.data[field]) });
        id.value = dialogRef.value.data?.id;
        if (!personsStore.persons) personsStore.refreshPersons();
        if (!issuesStore.issues) issuesStore.refreshIssues();
    });

    const authorNames = computed(() => {
        let dict = {};
        personsStore.persons.forEach(person => dict[person.id] = `${ person.firstname } ${ person.lastname }`);
        return dict;
    });


    const loading = ref(false);
    const onSubmit = handleSubmit((values) => {
        loading.value = true;
        if (!id.value) {
            API.opinions.addOpinion(values)
                .then(result => {
                    dialogRef.value.close();
                })
                .finally(() => loading.value = false);
        } else {
            API.opinions.updateOpinion({...values, id: id.value})
                .then(result => {
                    dialogRef.value.close();
                })
                .finally(() => loading.value = false);
        }
    });

</script>
<template>
    <div style="width: 650px">
        <h5>{{ id ? 'Modifier' : 'Ajouter' }} une opinion</h5>
        <form @submit="onSubmit" :initial-values="initialValues.value">
            <div class="formgrid grid">
                <div class="field col-6">
                    <label for="title">Auteur</label>
                    <Dropdown
                        v-if="!personsStore.persons"
                        loading
                        placeholder="Chargement en cours..."
                        class="w-full"
                        
                    />
                    <Dropdown
                        v-else
                        v-model="author_id"
                        :options="personsStore.persons"
                        optionLabel="firstname"
                        optionValue="id"
                        placeholder="Choisir une personne"
                        class="w-full"
                    >
                        <template #value="slotProps">
                            <span v-if="slotProps.value">
                                {{ authorNames[slotProps.value] }}
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

                <div class="field col-6">
                    <label for="title">Thème</label>

                    <Dropdown
                        v-if="!issuesStore.issues"
                        loading
                        placeholder="Chargement en cours..."
                        class="w-full"

                    />
                    <Dropdown
                        v-else
                        v-model="issue_id"
                        :options="issuesStore.issues"
                        optionLabel="title"
                        optionValue="id"
                        placeholder="Choisir un thème"
                        class="w-full"
                    />
                </div>
            </div>

            <div class="field">
                <label for="summary">Résumé</label>
                <Textarea
                    id="summary"
                    v-model="summary"
                    class="w-full"
                    :autoResize="true"
                ></Textarea>
            </div>
            <div class="field">
                <label for="content">Contenu détaillé</label>
                <Editor 
                    v-model="content"
                    id="content"
                    editorStyle="height: 320px"
                />
            </div>
            <Button type="submit" label="Soumettre" class="w-full" :loading="loading"></Button>
        </form>
        <Message v-for="(errorMessage, index) of errors" severity="error" :key="index">{{ errorMessage }}</Message>
        
    </div>
    
</template>