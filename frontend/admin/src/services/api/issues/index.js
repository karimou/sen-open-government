import http from '../https';

const listIssues = async () => {
    return http.get('/api/v1/issues')
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const addIssue = async ({title, short_description, long_description}) => {
    return http.post('/api/v1/issues', {title, short_description, long_description})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const updateIssue = async ({id, title, short_description, long_description}) => {
    return http.put('/api/v1/issues', {id, title, short_description, long_description})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const deleteIssues = async (ids) => {
    return http.delete('/api/v1/issues', { data: { ids } })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

export default {
    listIssues,
    addIssue,
    updateIssue,
    deleteIssues
}