import http from '../http';

const getOpinion = async (opinionId) => {
    return http.get(`/api/v1/opinions/${ opinionId }`)
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};


export default {
    getOpinion
}