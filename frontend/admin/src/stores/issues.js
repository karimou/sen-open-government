import { defineStore } from "pinia";
import { ref } from 'vue';
import { API } from '@/services/api';

export const useIssuesStore = defineStore('issues', () => {

    const issues = ref(null);

    const refreshIssues = async () => {

        return API.issues.listIssues()
            .then(data => issues.value = data);
    };

    return { issues, refreshIssues };
})
