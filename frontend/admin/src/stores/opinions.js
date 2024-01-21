import { defineStore } from "pinia";
import { ref } from 'vue';
import { API } from '@/services/api';

export const useOpinionsStore = defineStore('opinions', () => {

    const opinions = ref(null);

    const refreshOpinions = async () => {

        return API.opinions.listOpinions()
            .then(data => opinions.value = data);
    };

    const getPersonOpinions = (personId) => {
        return opinions.value?.filter(opinion => opinion.author_id == personId);
    };

    return { opinions, refreshOpinions, getPersonOpinions };
})
