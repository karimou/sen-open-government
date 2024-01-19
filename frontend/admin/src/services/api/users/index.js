import http from '../https';

const listUsers = async () => {
    return http.get('/api/v1/users')
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const addUser = async ({ username, email, phone }) => {
    phone = phone.replaceAll(' ', '');
    return http.post('/api/v1/users', { username, email, phone })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const updateUser = async ({ id, username, email, phone }) => {
    phone = phone.replaceAll(' ', '');
    return http.put('/api/v1/users', { id, username, email, phone })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const deleteUsers = async (ids) => {
    return http.delete('/api/v1/users', { data: { ids } })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

export default {
    listUsers,
    addUser,
    updateUser,
    deleteUsers
}