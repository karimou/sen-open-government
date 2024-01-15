// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';

import 'primevue/resources/themes/md-light-deeppurple/theme.css';
import 'primeflex/primeflex.css';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(PrimeVue);

app.mount('#app');
