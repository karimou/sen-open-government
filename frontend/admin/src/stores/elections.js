import { defineStore } from "pinia";
import { ref } from 'vue';
import { API } from '@/services/api';

export const useElectionsStore = defineStore('elections', () => {

    const elections = ref(null);

    const refreshElections = () => {

        API.elections.listElections()
            .then(data => elections.value = data);
    };

    return { elections, refreshElections };
})
