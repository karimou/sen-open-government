import http from '../http';

const listDocumentPages = async () => {
    return http.get('/api/v1/document-pages')
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const addDocumentPage = async ({date, type, title, description}) => {
    return http.post('/api/v1/document-pages', {date, type, title, description})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const updateDocumentPage = async ({id, date, type, title, description}) => {
    return http.put('/api/v1/document-pages', {id, date, type, title, description})
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


export default {
    listDocumentPages,
    addDocumentPage,
    updateDocumentPage,
    deleteDocumentPages
}