<script setup>
    import * as yup from 'yup';
    import { useForm } from 'vee-validate';
    import InputText from 'primevue/inputtext';
    import Textarea from 'primevue/textarea';
    import Button from 'primevue/button';
    import BaseQuillEditor from '@/components/BaseQuillEditor.vue';

    import Message from 'primevue/message';
    import { inject, onMounted, ref } from 'vue';
    import { API } from '@/services/api';
    import AppPicturesSelector from '@/components/AppPicturesSelector.vue';

    const schema = yup.object({
        title: yup
            .string()
            .required(),
        summary: yup
            .string()
            .required(),
        content: yup
            .string(),
        cover_image_url: yup
            .string(),
        capsule_url: yup
            .string()

    });
    const { handleSubmit, errors, defineField, setFieldValue } = useForm({validationSchema: schema});
    const [title, _titleAttrs ] = defineField('title');
    const [summary, _summaryAttrs ] = defineField('summary');
    const [content, _contentAttrs ] = defineField('content');
    const [cover_image_url, _cover_image_urlAttrs ] = defineField('cover_image_url');
    const [capsule_url, _capsule_urlAttrs ] = defineField('capsule_url');
    
    const id = ref(null);
    const parentId = ref(null);
    const initialValues = ref({});

    const dialogRef = inject('dialogRef');
    onMounted(() => {
        ['title', 'summary', 'content', 'cover_image_url', 'caspsule_ref'].forEach(field => { 
            if (dialogRef.value.data[field]) setFieldValue(field, dialogRef.value.data[field]) 
        });
        id.value = dialogRef.value.data?.id;
        parentId.value = dialogRef.value.data?.parent_id;
    });


    const loading = ref(false);
    const onSubmit = handleSubmit((values) => {
        loading.value = true;
        if (!id.value) {
            API.documentPages.addDocumentPage({...values, parent_id: parentId.value})
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        } else {
            API.documentPages.updateDocumentPage({...values, id: id.value, parent_id: parentId.value})
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
            <AppPicturesSelector 
                v-model:image="cover_image_url"
            />
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
                <label for="summary">Résumé</label>
                <Textarea
                    id="summary"
                    v-model="summary"
                    class="w-full"
                    :autoResize="true"
                ></Textarea>
            </div>
            <div class="field">
                <label for="summary">Contenu</label>
                <BaseQuillEditor 
                    v-model="content"
                    id="content"
                    editorHeight="320px"
                />
            </div>
            <Button type="submit" label="Soumettre" class="w-full" :loading="loading"></Button>
        </form>
        <Message v-for="(errorMessage, index) of errors" severity="error" :key="index">{{ errorMessage }}</Message>
        
    </div>
    
</template>