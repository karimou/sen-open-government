// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import DialogService from 'primevue/dialogservice';


import '@/assets/styles.scss';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.use(DialogService);

app.mount('#app');
