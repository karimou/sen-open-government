<script setup>
    import * as yup from 'yup';
    import { useForm } from 'vee-validate';
    import Textarea from 'primevue/textarea';
    import Button from 'primevue/button';
    import Editor from 'primevue/editor';
    import Dropdown from 'primevue/dropdown';

    import Message from 'primevue/message';
    import { computed, inject, onMounted, ref, defineAsyncComponent } from 'vue';
    import { API } from '@/services/api';

    import { usePersonsStore } from '@/stores/persons';
    import { useIssuesStore } from '@/stores/issues';

    import { useDialog } from 'primevue/usedialog';


    /* -----------
    Form schema and initialisation
    ----------- */
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
    
    /* ----------- 
    Data init
    ----------- */
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


    /* ----------- 
    Submit handling
    ----------- */
    const loading = ref(false);
    const onSubmit = handleSubmit((values) => {
        loading.value = true;
        if (!id.value) {
            API.opinions.addOpinion(values)
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        } else {
            API.opinions.updateOpinion({...values, id: id.value})
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        }
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

    /* ----------- 
    Issues upsert handling
    ----------- */
    const IssuesUpsertForm = defineAsyncComponent(() => import('@/components/IssuesUpsertForm.vue'));
    const openIssueUpsertForm = (issue = {}) => {
        dialog.open(IssuesUpsertForm, { 
            data: issue,
            onClose: (props) => {
                if (props?.data == 'success') issuesStore.refreshIssues();
            },
            props: {
                modal: true
            }
        });
    };

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
                        filter
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
                    <Button 
                        label="Ajouter une personne" 
                        icon="pi pi-plus" 
                        text
                        @click="openPersonUpsertForm"
                    ></Button>
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
                        filter
                    />
                    <Button 
                        label="Ajouter un thème" 
                        icon="pi pi-plus" 
                        text
                        @click="openIssueUpsertForm"
                    ></Button>
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