
import { ref } from 'vue';
import { defineStore } from "pinia";

export const useElectionsStore = defineStore('elections', () => {

    const elections = ref(null);
    const currentElection = ref(null);

    const storeCurrentElection = (election) => {
        currentElection.value = election;
    };

    return { elections, currentElection, storeCurrentElection };
});