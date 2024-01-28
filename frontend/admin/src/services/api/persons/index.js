import http from '../http';

const listPersons = async () => {
    return http.get('/api/v1/persons')
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const addPerson = async ({ firstname, lastname, gender, date_of_birth, occupation, description, facebook, instagram, twitter, website, photo }) => {
    return http.post('/api/v1/persons', { firstname, lastname, gender, date_of_birth, occupation, description, facebook, instagram, twitter, website, photo })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const updatePerson = async ({id, firstname, lastname, gender, date_of_birth, occupation, description, facebook, instagram, twitter, website, photo}) => {
    return http.put('/api/v1/persons', {id, firstname, lastname, gender, date_of_birth, occupation, description, facebook, instagram, twitter, website, photo})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const deletePersons = async (ids) => {
    return http.delete('/api/v1/persons', { data: { ids } })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

export default {
    listPersons,
    addPerson,
    updatePerson,
    deletePersons
}