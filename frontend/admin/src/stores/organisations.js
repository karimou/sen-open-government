import { defineStore } from "pinia";
import { ref } from 'vue';
import { API } from '@/services/api';

export const useOrganisationsStore = defineStore('organisations', () => {

    const organisations = ref(null);

    const refreshOrganisations = async () => {

        return API.organisations.listOrganisations()
            .then(data => organisations.value = data);
    };

    return { organisations, refreshOrganisations };
})
