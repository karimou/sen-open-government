<script setup>
    import * as yup from 'yup';
    import { useForm } from 'vee-validate';
    import InputText from 'primevue/inputtext';
    import Textarea from 'primevue/textarea';
    import Button from 'primevue/button';
    import RadioButton from 'primevue/radiobutton';
    import Dropdown from 'primevue/dropdown';
    import InputMask from 'primevue/inputMask';
    import Message from 'primevue/message';
    import { inject, onMounted, ref } from 'vue';
    import { API } from '@/services/api';
    import { useOrganisationsStore } from '@/stores/organisations';

    const schema = yup.object({
        name: yup
            .string()
            .required(),
        type: yup
            .string()
            .required(),
        description: yup
            .string(),
        twitter: yup
            .string(),
        facebook: yup
            .string(),
        instagram: yup
            .string(),
        website: yup
            .string(),
        address: yup
            .string(),
        contact_phone: yup
            .number(),
        contact_email: yup
            .string()
            .email(),
        parent_organisation_id: yup
            .number()
    });
    const { handleSubmit, errors, defineField, setFieldValue } = useForm({validationSchema: schema});
    const [name, _dateAttrs ] = defineField('name');
    const [type, _typeAttrs ] = defineField('type');
    const [description, _descriptionAttrs ] = defineField('description');
    const [twitter, _twitterAttrs ] = defineField('twitter');
    const [facebook, _facebookAttrs ] = defineField('facebook');
    const [instagram, _instagramAttrs ] = defineField('instagram');
    const [website, _websiteAttrs ] = defineField('website');
    const [address, _addressAttrs ] = defineField('address');
    const [contact_phone, _contact_phoneAttrs ] = defineField('contact_phone');
    const [contact_email, _contact_emailAttrs ] = defineField('contact_email');
    const [parent_organisation_id, _parent_organisation_idAttrs ] = defineField('parent_organisation_id');
    
    const organisationsStore = useOrganisationsStore();
    
    const id = ref(null);
    const filteredOrganisations = ref([]);
    const initialValues = ref({});
    const dialogRef = inject('dialogRef');
    onMounted(() => {
        ['name', 'type', 'description', 'twitter', 'facebook', 'instagram', 'website', 'address', 'contact_phone', 'contact_email', 'parent_organisation_id'].forEach(field => { if (dialogRef.value.data[field]) setFieldValue(field, dialogRef.value.data[field]) });
        setFieldValue('type', (dialogRef.value.data?.type == 'click') ? 'party' : dialogRef.value.data?.type);
        id.value = dialogRef.value.data?.id;
        filteredOrganisations.value = id.value ? organisationsStore.organisations.filter(organisation => (organisation.id != id.value)) : organisationsStore.organisations;
    });


    const loading = ref(false);
    const onSubmit = handleSubmit((values) => {
        loading.value = true;
        if (!id.value) {
            API.organisations.addOrganisation(values)
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        } else {
            API.organisations.updateOrganisation({...values, id: id.value})
                .then(result => {
                    dialogRef.value.close('success');
                })
                .finally(() => loading.value = false);
        }
    });

    const organisationTypes = ref([
        {label: 'Parti', value: 'party'},
        {label: 'Institution', value: 'institution'},
        {label: 'Association', value: 'association'},
        {label: 'Coalition', value: 'coalition'},
        {label: 'Think Tank', value: 'think_tank'},
    ]);


</script>
<template>
    <div style="width: 450px">
        <h5>{{ id ? 'Modifier' : 'Ajouter' }} une organisation</h5>
        <form @submit="onSubmit" :initial-values="initialValues.value">
            <div class="field">
                <div class="formgrid grid">
                    <div class="field-radiobutton col-6" v-for="(organisationType, index) in organisationTypes">
                        <RadioButton :id="`type${ index }`" name="type" v-model="type" :value="organisationType.value" />
                        <label for="type1">{{ organisationType.label }}</label>
                    </div>
                </div>
            </div>
            <div class="field">
                <label for="title">Nom</label>
                <InputText
                    id="name"
                    type="text"
                    v-model="name"
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
            <div class="formgrid grid">
                <div class="field col">
                    <label for="title">Téléphone</label>
                    <InputMask
                        id="contact_phone"
                        v-model="contact_phone"
                        class="w-full"
                        mask="221 999 99 99"
                        placeholder="221 999 99 99"
                    />
                </div>
                <div class="field col">
                    <label for="title">Email</label>
                    <InputText
                        id="contact_email"
                        type="email"
                        v-model="contact_email"
                        class="w-full"
                    />
                </div>
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
            <div class="field">
                <label for="title">Organisation parent</label>
                <Dropdown
                    v-model="parent_organisation_id"
                    :options="filteredOrganisations"
                    optionLabel="name"
                    optionValue="id"
                    placeholder="Choisir une organisation"
                    class="w-full"
                />
            </div>
            <Button type="submit" label="Soumettre" class="w-full" :loading="loading"></Button>
        </form>
        <Message v-for="(errorMessage, index) of errors" severity="error" :key="index">{{ errorMessage }}</Message>
        
    </div>
    
</template>