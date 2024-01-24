
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import Ripple from 'primevue/ripple';

import '@/assets/styles.scss';
import 'primevue/resources/themes/lara-light-green/theme.css'

const app = createApp(App);


app.use(router);

app.use(PrimeVue, { ripple: true });
app.directive('ripple', Ripple);

const pinia = createPinia();
app.use(pinia);

app.mount('#app')
