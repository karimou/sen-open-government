import http from '../https';

const listElections = async () => {
    return http.get('/api/v1/elections')
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
}

export default {
    listElections
}