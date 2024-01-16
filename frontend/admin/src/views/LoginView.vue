<script setup>
  import { useForm } from 'vee-validate';

  import * as yup from 'yup';

  import Card from 'primevue/card';
  import Password from 'primevue/password';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  import { API } from '@/services';

  const schema = yup.object({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(6)
      .required()
  });

  const { handleSubmit, resetForm, errors, defineField } = useForm({validationSchema: schema})
  
  const [email, emailAttrs] = defineField('email');

  const [password, passwordAttrs] = defineField('password');

  

  const onSubmit = handleSubmit((values) => {
    API.auth.logUserIn(values);
  });

</script>

<template>
  <div
    class="card flex flex-wrap justify-content-center gap-3"
  >
  <Card 
  >
    <template #title>Login view: this is where admin log in</template>
    <template #content class="justify-content-center ">
      <form 
        @submit="onSubmit"
      >
        <div class="field">
          <span class="p-float-label">
            <InputText id="email" type="email" v-model="email" class="w-full"/>
            <label for="email">Email</label>
          </span>
          </div>

        
        <div class="field">
          <span class="p-float-label">
            <InputText id="password" type="password" v-model="password" class="w-full"/>
            <label for="password">Password</label>
          </span>
        </div>

        <Button type="submit" label="Submit"  class="w-full"></Button>
      </form>

      <small v-for="errorMessage in errors" class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
    </template>
      
  </Card>
</div>

</template>