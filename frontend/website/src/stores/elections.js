
import { ref } from 'vue';
import { defineStore } from "pinia";

export const useElectionsStore = defineStore('elections', () => {

    const elections = ref(null);
    const currentElection = ref(null);
    const issuesDict = ref({});

    const storeCurrentElection = (election) => {
        currentElection.value = election;
        issuesDict.value = {};
        currentElection.value.issues.forEach(issue => issuesDict.value[issue.id] = issue);
        console.log(issuesDict.value)
    };


    const getIssueTitle = (issueId) => issuesDict.value[issueId]?.title;

    return { elections, currentElection, storeCurrentElection, getIssueTitle };
});