<script setup>
  import { useForm } from 'vee-validate';

  import * as yup from 'yup';
  import { ref } from 'vue';
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

  const { handleSubmit, errors, defineField } = useForm({validationSchema: schema})
  
  const [email, _emailAttrs] = defineField('email');

  const [password, _passwordAttrs] = defineField('password');
  

  const loading = ref(false);
  const onSubmit = handleSubmit((values) => {
    loading.value = true;
    API.auth.logUserIn(values).finally(() => loading.value = false);
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
            <InputText 
              id="email" 
              type="email" 
              v-model="email" 
              class="w-full"
            />
            <label for="email">Email</label>
          </span>
          </div>

        
        <div class="field">
          <span class="p-float-label">
            <Password 
              id="password" 
              type="password" 
              v-model="password" 
              inputClass="w-full" 
              class="w-full"
              :toggleMask="true"
            />
            <label for="password">Password</label>
          </span>
        </div>

        <Button type="submit" label="Submit"  class="w-full" :loading="loading"></Button>
      </form>

      <ul v-if="Object.keys(errors)?.length > 0">
        <li v-for="errorMessage in errors" >
          <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
        </li>
      </ul>
    </template>
      
  </Card>
</div>

</template>