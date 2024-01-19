<script setup>
    import * as yup from 'yup';
    import { useForm } from 'vee-validate';
    import InputText from 'primevue/inputtext';
    import InputMask from 'primevue/inputMask';
    import Button from 'primevue/button';

    import Message from 'primevue/message';
    import { inject, onMounted, ref } from 'vue';
    import { API } from '@/services/api';

    const schema = yup.object({
        username: yup
            .string()
            .required(),
        email: yup
            .string()
            .email()
            .required(),
        phone: yup
            .string()
    });
    const { handleSubmit, errors, defineField, setFieldValue } = useForm({validationSchema: schema});
    const [username, _usernameAttrs ] = defineField('username');
    const [email, _emailAttrs ] = defineField('email');
    const [phone, _phoneAttrs ] = defineField('phone');
    
    const id = ref(null);
    const initialValues = ref({});

    const dialogRef = inject('dialogRef');
    onMounted(() => {
        ['username', 'email', 'phone'].forEach(field => { if (dialogRef.value.data[field]) setFieldValue(field, dialogRef.value.data[field]) });
        id.value = dialogRef.value.data?.id;
    });


    const loading = ref(false);
    const onSubmit = handleSubmit((values) => {
        loading.value = true;
        if (!id.value) {
            API.users.addUser(values)
                .then(result => {
                    dialogRef.value.close();
                })
                .finally(() => loading.value = false);
        } else {
            API.users.updateUser({...values, id: id.value})
                .then(result => {
                    dialogRef.value.close();
                })
                .finally(() => loading.value = false);
        }
    });

</script>
<template>
    <div style="width: 450px">
        <h5>{{ id ? 'Modifier' : 'Ajouter' }} un utilisateur</h5>
        <form @submit="onSubmit" :initial-values="initialValues.value">
            <div class="field">
                <label for="username">Nom d'utilisateur</label>
                <InputText
                    id="username"
                    type="text"
                    v-model="username"
                    class="w-full"
                />
            </div>
            <div class="field">
                <label for="email">Email</label>
                <InputText
                    id="email"
                    type="email"
                    v-model="email"
                    class="w-full"
                />
            </div>
            <div class="field">
                <label for="email">phone</label>
                    <InputMask
                        id="phone"
                        v-model="phone"
                        class="w-full"
                        mask="221 99 999 99 99"
                        placeholder="221 99 999 99 99"
                    />
            </div>
            <Button type="submit" label="Soumettre" class="w-full" :loading="loading"></Button>
        </form>
        <Message v-for="(errorMessage, index) of errors" severity="error" :key="index">{{ errorMessage }}</Message>
        
    </div>
    
</template>