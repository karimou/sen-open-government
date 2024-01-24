import http from '../http';

const getElection = async (electionId) => {
    return http.get(`/api/v1/elections/${ electionId }`)
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
}

export default {
    getElection
}