
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
    };

    const getIssue = (issueId) => issuesDict.value[issueId];

    const getIssueTitle = (issueId) => issuesDict.value[issueId]?.title;

    const getIssueImage = (issueId) => issuesDict.value[issueId]?.photo;

    const getCandidate = (candidateId) => {
        for (let i = 0; i < currentElection.value.candidates?.length; i++) {
            let item = currentElection.value.candidates[i];
            if (item.id == candidateId) return item;
        }
    };

	const getCandidateName = (candidateId) => {
        let candidate = getCandidate(candidateId);
		if (!candidate) return;
		return `${ candidate.firstname } ${ candidate.lastname }`;
	};
	const getCandidateOrganisationsStr = (candidateId) => {
        let candidate = getCandidate(candidateId);
		return candidate?.organisations?.map(organisation => organisation.name).filter(name => !!name && name != '').join(' | ');
	};

    const hasCandidateOrganisations = (candidateId) => {
        let candidate = getCandidate(candidateId);
		return candidate?.organisations?.length > 0;
	};

    return { 
        elections, 
        currentElection, 
        storeCurrentElection, 
        getIssue, 
        getIssueTitle, 
        getIssueImage, 
        getCandidate, 
        getCandidateName, 
        getCandidateOrganisationsStr ,
        hasCandidateOrganisations
    };
});