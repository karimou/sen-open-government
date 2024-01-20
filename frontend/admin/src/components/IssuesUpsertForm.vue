<script setup>
    import * as yup from 'yup';
    import { useForm } from 'vee-validate';
    import InputText from 'primevue/inputtext';
    import Textarea from 'primevue/textarea';
    import Button from 'primevue/button';
    import Editor from 'primevue/editor';

    import Message from 'primevue/message';
    import { inject, onMounted, ref } from 'vue';
    import { API } from '@/services/api';
    import { format } from 'date-fns';

    const schema = yup.object({
        title: yup
            .string()
            .required(),
        short_description: yup
            .string()
            .required(),
        long_description: yup
            .string()
    });
    const { handleSubmit, errors, defineField, setFieldValue } = useForm({validationSchema: schema});
    const [title, _titleAttrs ] = defineField('title');
    const [short_description, _short_descriptionAttrs ] = defineField('short_description');
    const [long_description, _long_descriptionAttrs ] = defineField('long_description');
    
    const id = ref(null);
    const initialValues = ref({});

    const dialogRef = inject('dialogRef');
    onMounted(() => {
        ['title', 'short_description', 'long_description'].forEach(field => { if (dialogRef.value.data[field]) setFieldValue(field, dialogRef.value.data[field]) });
        id.value = dialogRef.value.data?.id;
    });


    const loading = ref(false);
    const onSubmit = handleSubmit((values) => {
        loading.value = true;
        if (!id.value) {
            API.issues.addIssue(values)
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        } else {
            API.issues.updateIssue({...values, id: id.value})
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        }
    });

</script>
<template>
    <div style="width: 650px">
        <h5>{{ id ? 'Modifier' : 'Ajouter' }} un thème politique</h5>
        <form @submit="onSubmit" :initial-values="initialValues.value">
            <div class="field">
                <label for="title">Titre</label>
                <InputText
                    id="title"
                    type="text"
                    v-model="title"
                    class="w-full"
                />
            </div>
            <div class="field">
                <label for="short_description">Description courte</label>
                <Textarea
                    id="short_description"
                    v-model="short_description"
                    class="w-full"
                    :autoResize="true"
                ></Textarea>
            </div>
            <div class="field">
                <label for="short_description">Description longue</label>
                <Editor 
                    v-model="long_description"
                    id="long_description"
                    editorStyle="height: 320px"
                />
            </div>
            <Button type="submit" label="Soumettre" class="w-full" :loading="loading"></Button>
        </form>
        <Message v-for="(errorMessage, index) of errors" severity="error" :key="index">{{ errorMessage }}</Message>
        
    </div>
    
</template>