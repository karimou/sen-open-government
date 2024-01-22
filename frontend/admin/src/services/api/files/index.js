import http from '../http';

const listFiles = async () => {
    return http.get('/api/v1/files')
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

export default {
    listFiles
}