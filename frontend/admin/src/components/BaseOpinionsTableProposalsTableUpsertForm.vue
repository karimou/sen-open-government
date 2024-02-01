<script setup>
    import * as yup from 'yup';
    import { useForm } from 'vee-validate';
    import Textarea from 'primevue/textarea';
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';

    import Message from 'primevue/message';
    import { inject, onMounted, ref } from 'vue';
    import { API } from '@/services/api';


    /* -----------
    Form schema and initialisation
    ----------- */
    const schema = yup.object({
        number: yup
            .number()
            .required(),
        content: yup
            .string()
            .required(),
    });
    const { handleSubmit, errors, defineField, setFieldValue } = useForm({validationSchema: schema});
    const [content, _contentAttrs ] = defineField('content');
    const [number, _numberAttrs ] = defineField('number');
    
    /* ----------- 
    Data init
    ----------- */
    const id = ref(null);
    const opinionId = ref(null);
    const initialValues = ref({});

    const dialogRef = inject('dialogRef');
    onMounted(() => {
        if (dialogRef.value.data?.proposal?.content) setFieldValue('content', dialogRef.value.data?.proposal?.content);
        if (dialogRef.value.data?.proposal?.number) setFieldValue('number', dialogRef.value.data?.proposal?.number);
        id.value = dialogRef.value.data?.proposal?.id;
        opinionId.value = dialogRef.value.data?.opinion?.id;
    });


    /* ----------- 
    Submit handling
    ----------- */
    const loading = ref(false);
    const onSubmit = handleSubmit((values) => {
        loading.value = true;
        if (!id.value) {
            API.opinions.addProposal({ opinionId: opinionId.value, ...values })
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        } 
        else {
            API.opinions.updateProposal({...values, id: id.value})
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        }
    });

</script>
<template>
    <div style="width: 650px">
        <h5>{{ id ? 'Modifier' : 'Ajouter' }} une proposition</h5>
        <form @submit="onSubmit" :initial-values="initialValues.value">
            <div class="formgrid grid">
                <div class="field col-6">
                    <label for="number">Number</label>
                    <InputText
                        id="number"
                        type="number"
                        v-model="number"
                        class="w-full"
                    />
                </div>
            </div>
            <div class="formgrid grid">
                <div class="field col">
                    <label for="content">Contenu</label>
                    <Textarea
                        id="content"
                        v-model="content"
                        class="w-full"
                        :autoResize="true"
                    ></Textarea>
                </div>
            </div>
            <Button type="submit" label="Soumettre" class="w-full" :loading="loading"></Button>
        </form>
        <Message v-for="(errorMessage, index) of errors" severity="error" :key="index">{{ errorMessage }}</Message>
        
    </div>
    
</template>