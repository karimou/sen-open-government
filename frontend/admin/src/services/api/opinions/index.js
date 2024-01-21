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

export default {
    listOpinions,
    addOpinion,
    updateOpinion,
    deleteOpinions
}