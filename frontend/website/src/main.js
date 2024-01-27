
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

app.provide('$groupArrayBy', (array = [], callbackFn) => {
    if (!callbackFn) return;
    if (Object.groupBy) return Object.groupBy(array, callbackFn);
    if (array.group) return array.group(callbackFn);
    let dict = {};
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        let key = callbackFn(item);
        if (!(key in dict)) dict[key] = [];
        dict[key].push(item);
    }
    return dict;
});

app.mount('#app')
