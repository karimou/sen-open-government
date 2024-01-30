import { defineStore } from "pinia";
import { ref, computed } from 'vue';
import { API } from '@/services/api';

export const useIssuesStore = defineStore('issues', () => {

    const issues = ref(null);

    const refreshIssues = async () => {

        return API.issues.listIssues()
            .then(data => issues.value = data);
    };


    const issuesByTitle = computed(() => {

        let dict = {};
        for (let i = 0; i < issues.value?.length; i++) {
            let issue = issues.value[i];
            console.log(issue)
            dict[issue.title] = issue;
        }
        return dict;
    });


    return { issues, refreshIssues, issuesByTitle };
})
