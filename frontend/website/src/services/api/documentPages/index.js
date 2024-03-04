import http from '../http';

const getDocumentPage = async (documentPageId) => {
    return http.get(`/api/v1/document-pages/${ documentPageId }`)
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
}

export default {
    getDocumentPage
}