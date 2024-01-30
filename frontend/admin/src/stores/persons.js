import { defineStore } from "pinia";
import { ref, computed } from 'vue';
import { API } from '@/services/api';

export const usePersonsStore = defineStore('persons', () => {

    const persons = ref(null);

    const refreshPersons = async () => {

        return API.persons.listPersons()
            .then(data => persons.value = data);
    };


    const personsNames = computed(() => {
        let dict = {};
        persons.value.forEach(person => dict[person.id] = `${ person.firstname } ${ person.lastname }`);
        return dict;
    });

    return { persons, personsNames, refreshPersons };
})
