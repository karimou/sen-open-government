import http from '../https';

const listElections = async () => {
    return http.get('/api/v1/elections')
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const addElection = async ({date, type, title, description}) => {
    return http.post('/api/v1/elections', {date, type, title, description})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const updateElection = async ({id, date, type, title, description}) => {
    return http.put('/api/v1/elections', {id, date, type, title, description})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const deleteElections = async (ids) => {
    return http.delete('/api/v1/elections', { data: { ids } })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

export default {
    listElections,
    addElection,
    updateElection,
    deleteElections
}