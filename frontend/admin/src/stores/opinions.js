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

    const getIssueOpinions = (issueId) => {
        return opinions.value?.filter(opinion => opinion.issue_id == issueId);
    };

    return { opinions, refreshOpinions, getPersonOpinions, getIssueOpinions };
})
