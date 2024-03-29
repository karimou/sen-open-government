<script setup>
    import * as yup from 'yup';
    import { useForm } from 'vee-validate';
    import InputText from 'primevue/inputtext';
    import Textarea from 'primevue/textarea';
    import Button from 'primevue/button';
    import RadioButton from 'primevue/radiobutton';
    import Message from 'primevue/message';
    import { inject, onMounted, ref } from 'vue';
    import { API } from '@/services/api';
    import { format } from 'date-fns';
    import { useDialog } from 'primevue/usedialog';

    
    /* -----------
    Form schema and initialisation
    ----------- */
    const schema = yup.object({
        date: yup
            .date()
            .required(),
        title: yup
            .string()
            .required(),
        type: yup
            .string()
            .required(),
        description: yup
            .string()
    });
    const { handleSubmit, errors, defineField, setFieldValue } = useForm({validationSchema: schema});
    const [date, _dateAttrs ] = defineField('date');
    const [title, _titleAttrs ] = defineField('title');
    const [type, _typeAttrs ] = defineField('type');
    const [description, _descriptionAttrs ] = defineField('description');
    
    /* -----------
    Data init
    ----------- */
    const id = ref(null);
    const initialValues = ref({});

    const dialogRef = inject('dialogRef');
    onMounted(() => {
        if (dialogRef.value.data?.date) setFieldValue('date', format(dialogRef.value.data?.date, 'yyyy-MM-dd'));
        setFieldValue('type', (dialogRef.value.data?.type == 'click') ? 'presidential' : dialogRef.value.data?.type);
        ['title', 'description'].forEach(field => { if (dialogRef.value.data[field]) setFieldValue(field, dialogRef.value.data[field]) });
        id.value = dialogRef.value.data?.id;
    });


    /* ----------- 
    Submit handling
    ----------- */
    const loading = ref(false);
    const onSubmit = handleSubmit((values) => {
        loading.value = true;
        if (!id.value) {
            API.elections.addElection(values)
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        } else {
            API.elections.updateElection({...values, id: id.value})
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        }
    });

</script>
<template>
    <div style="width: 450px">
        <h5>{{ id ? 'Modifier' : 'Ajouter' }} une élection</h5>
        <form @submit="onSubmit" :initial-values="initialValues.value">
            <div class="field">
                <div class="field-radiobutton">
                    <RadioButton id="type1" name="type" v-model="type" value="presidential" />
                    <label for="type1">Présidentielle</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton id="type2" name="type" v-model="type" value="parliament" />
                    <label for="type2">Législatives</label>
                </div>
            </div>
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
                <label for="date">Date</label>
                <InputText
                    id="date"
                    type="date"
                    v-model="date"
                    class="w-full"
                />
            </div>
            <div class="field">
                <label for="description">Description</label>
                <Textarea
                    id="description"
                    v-model="description"
                    class="w-full"
                    :autoResize="true"
                ></Textarea>
            </div>
            <Button type="submit" label="Soumettre" class="w-full" :loading="loading"></Button>
        </form>
        <Message v-for="(errorMessage, index) of errors" severity="error" :key="index">{{ errorMessage }}</Message>
        
    </div>
    
</template>