import { defineStore } from "pinia";
import { ref } from 'vue';
import { API } from '@/services/api';

export const usePersonsStore = defineStore('persons', () => {

    const persons = ref(null);

    const refreshPersons = () => {

        API.persons.listPersons()
            .then(data => persons.value = data);
    };

    return { persons, refreshPersons };
})
