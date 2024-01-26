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

const listOrganisationMembers = async (organisationId) => {
    return http.get(`/api/v1/organisations/members/${ organisationId }`)
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const addOrganisationMember = async ({organisationId, personId, role}) => {
    return http.post('/api/v1/organisations/members', {organisationId, personId, role})
        .then(res => {
            if (res.status == 200) {
                return res.data;
            }
        })
};

const removeOrganisationMembers = async (pairs) => {
    return http.delete('/api/v1/organisations/members', { data: { pairs } })
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
    deleteOrganisations,
    listOrganisationMembers,
    addOrganisationMember,
    removeOrganisationMembers
}