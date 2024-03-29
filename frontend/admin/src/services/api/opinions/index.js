import http from '../http';

const listOpinions = async () => {
    return http.get('/api/v1/opinions')
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const addOpinion = async ({ author_id, issue_id, summary, content }) => {
    return http.post('/api/v1/opinions', { author_id, issue_id, summary, content })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const updateOpinion = async ({ id, author_id, issue_id, summary, content }) => {
    return http.put('/api/v1/opinions', { id, author_id, issue_id, summary, content })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const deleteOpinions = async (ids) => {
    return http.delete('/api/v1/opinions', { data: { ids } })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};


const listProposals = async (opinionId) => {
    return http.get(`/api/v1/opinions/proposals/${ opinionId }`)
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const addProposal = async ({opinionId, number, content}) => {
    return http.post('/api/v1/opinions/proposals', {opinionId, number, content})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};
const updateProposal = async ({id, number, content}) => {
    return http.put('/api/v1/opinions/proposals', {id, number, content})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const deleteProposals = async (ids) => {
    return http.delete('/api/v1/opinions/proposals', { data: { ids } })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

export default {
    listOpinions,
    addOpinion,
    updateOpinion,
    deleteOpinions,
    listProposals,
    addProposal,
    updateProposal,
    deleteProposals
}