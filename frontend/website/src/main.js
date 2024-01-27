
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import Ripple from 'primevue/ripple';

import '@/assets/styles.scss';

const app = createApp(App);


app.use(router);

app.use(PrimeVue, { ripple: true });
app.directive('ripple', Ripple);

const pinia = createPinia();
app.use(pinia);

app.provide('$groupArrayBy', (array, callbackFn) => {
    if (Object.groupBy) return Object.groupBy(array, callbackFn);
    if (array.group) return array.group(callbackFn);
});

app.mount('#app')
