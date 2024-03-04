import http from '../http';

const listDocumentPages = async () => {
    return http.get('/api/v1/document-pages')
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const addDocumentPage = async ({title, summary, content, cover_image_url, capsule_url, parent_id}) => {
    return http.post('/api/v1/document-pages', {title, summary, content, cover_image_url, capsule_url, parent_id})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const updateDocumentPage = async ({id, title, summary, content, cover_image_url, capsule_url, parent_id}) => {
    return http.put('/api/v1/document-pages', {id, title, summary, content, cover_image_url, capsule_url, parent_id})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const deleteDocumentPages = async (ids) => {
    return http.delete('/api/v1/document-pages', { data: { ids } })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const getDocument = async (id) => {
    return http.get(`/api/v1/document-pages/${id}`)
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};


export default {
    listDocumentPages,
    addDocumentPage,
    updateDocumentPage,
    deleteDocumentPages,
    getDocument
}