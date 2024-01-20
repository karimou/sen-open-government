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
        firstname: yup
            .string()
            .required(),
        lastname: yup
            .string()
            .required(),
        gender: yup
            .string(),
        date_of_birth: yup
            .date(),
        description: yup
            .string(),
        website: yup
            .string(),
        facebook: yup
            .string(),
        twitter: yup
            .string(),
        instagram: yup
            .string(),
        photo: yup
            .string(),
    });
    
    const { handleSubmit, errors, defineField, setFieldValue } = useForm({validationSchema: schema});
    const [firstname, _firstnameAttrs ] = defineField('firstname');
    const [lastname, _lastnameAttrs ] = defineField('lastname');
    const [gender, _genderAttrs ] = defineField('gender');
    const [date_of_birth, _date_of_birthAttrs ] = defineField('date_of_birth');
    const [description, _descriptionAttrs ] = defineField('description');
    const [twitter, _twitterAttrs ] = defineField('twitter');
    const [facebook, _facebookAttrs ] = defineField('facebook');
    const [instagram, _instagramAttrs ] = defineField('instagram');
    const [website, _websiteAttrs ] = defineField('website');
    const [photo, _photoAttrs ] = defineField('photo');
    
    const id = ref(null);
    const initialValues = ref({});

    const dialogRef = inject('dialogRef');
    onMounted(() => {
        if (dialogRef.value.data?.date_of_birth) setFieldValue('date_of_birth', format(dialogRef.value.date_of_birth?.date, 'yyyy-MM-dd'));
        ['firstname', 'lastname', 'gender', 'description', 'facebook', 'instagram', 'twitter', 'website', 'photo'].forEach(field => { if (dialogRef.value.data[field]) setFieldValue(field, dialogRef.value.data[field]) });
        id.value = dialogRef.value.data?.id;
    });


    /* ----------- 
    Submit handling
    ----------- */
    const loading = ref(false);
    const onSubmit = handleSubmit((values) => {
        loading.value = true;
        if (!id.value) {
            API.persons.addPerson(values)
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        } else {
            API.persons.updatePerson({...values, id: id.value})
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        }
    });

</script>
<template>
    <div style="width: 450px">
        <h5>{{ id ? 'Modifier' : 'Ajouter' }} une personne</h5>
        <form @submit="onSubmit" :initial-values="initialValues.value">
            <div class="formgrid grid">
                <div class="field col-6">
                    <label for="firstname">Prénom</label>
                    <InputText
                        id="firstname"
                        type="text"
                        v-model="firstname"
                        class="w-full"
                    />
                </div>
                <div class="field col-6">
                    <label for="title">Nom</label>
                    <InputText
                        id="lastname"
                        type="text"
                        v-model="lastname"
                        class="w-full"
                    />
                </div>
            </div>
            <div class="formgrid grid">
                <div class="field col-6">
                    <label for="date_of_birth">Date de naissance</label>
                    <InputText
                        id="date_of_birth"
                        type="date"
                        v-model="date_of_birth"
                        class="w-full"
                    />
                </div>
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
            <div class="formgrid grid">
                <div class="field col-6">
                    <label for="title">Website</label>
                    <InputText
                        id="website"
                        type="url"
                        v-model="website"
                        class="w-full"
                    />
                </div>
                <div class="field col-6">
                    <label for="title">Facebook</label>
                    <InputText
                        id="facebook"
                        type="text"
                        v-model="facebook"
                        class="w-full"
                    />
                </div>
                <div class="field col-6">
                    <label for="title">Twitter</label>
                    <InputText
                        id="twitter"
                        type="text"
                        v-model="twitter"
                        class="w-full"
                    />
                </div>
                <div class="field col-6">
                    <label for="title">Instagram</label>
                    <InputText
                        id="instagram"
                        type="text"
                        v-model="instagram"
                        class="w-full"
                    />
                </div>
            </div>
            <Button type="submit" label="Soumettre" class="w-full" :loading="loading"></Button>
        </form>
        <Message v-for="(errorMessage, index) of errors" severity="error" :key="index">{{ errorMessage }}</Message>
        
    </div>
    
</template>

