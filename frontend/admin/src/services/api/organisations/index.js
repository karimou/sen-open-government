import http from '../http';

const listOrganisations = async () => {
    return http.get('/api/v1/organisations')
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const addOrganisation = async ({name, type, description, twitter, facebook, instagram, website, address, contact_phone, contact_email, parent_organisation_id}) => {
    return http.post('/api/v1/organisations', {name, type, description, twitter, facebook, instagram, website, address, contact_phone, contact_email, parent_organisation_id})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const updateOrganisation = async ({id, name, type, description, twitter, facebook, instagram, website, address, contact_phone, contact_email, parent_organisation_id}) => {
    return http.put('/api/v1/organisations', {id, name, type, description, twitter, facebook, instagram, website, address, contact_phone, contact_email, parent_organisation_id})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const deleteOrganisations = async (ids) => {
    return http.delete('/api/v1/organisations', { data: { ids } })
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

export default {
    listOrganisations,
    addOrganisation,
    updateOrganisation,
    deleteOrganisations
}