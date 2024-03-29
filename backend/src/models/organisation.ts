import { getClient, loadQueries } from '../services/db';
import { User } from '../types';

const organisationQueries = loadQueries('organisations');

class Organisation {
    id: number
    name: string
    type: 'party' | 'association' | 'coalition' | 'think_tank' | 'institution'
    description: string
    twitter: string
    facebook: string
    instagram: string
    website: string
    address: string
    contact_phone: string
    contact_email: string
    parent_organisation_id: number
    parent_organisation: Organisation
    created_on: Date
    last_modified_on: Date
    last_modified_by: User | undefined

    constructor(params: { [key: string]: any }, user?: User) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }
    async add(): Promise<void> {
        let client = await getClient();

        let query = {
            text: organisationQueries.INSERT_ORGANISATION,
            values: [this.name, this.type, this.description, this.twitter, this.facebook, this.instagram, this.website, this.address, this.contact_phone, this.contact_email, this.parent_organisation_id, this.last_modified_by?.id]
        }

        let organisation = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!organisation) throw(new Error('[organisation] retrieving obj failed'));
    
        this.id = organisation.id;
        this.last_modified_on = organisation.last_modified_on;
    }
    async update(): Promise<void> {
        let client = await getClient();

        let query = {
            text: organisationQueries.UPDATE_ORGANISATION,
            values: [this.id, this.name, this.type, this.description, this.twitter, this.facebook, this.instagram, this.website, this.address, this.contact_phone, this.contact_email, this.parent_organisation_id, this.last_modified_by?.id]
        }

        let organisation = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!organisation) throw(new Error('[Organisation] update failed'));

        Object.assign(this, organisation);

    }
    static async delete(ids: Array<number>): Promise<void> {
        let client = await getClient();

        let query = {
            text: organisationQueries.DELETE_ORGANISATIONS_BY_IDS,
            values: [ids]
        }

        let organisations = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!organisations) throw(new Error('[Organisation] organisations deletion failed'));

    }
    static async getById(id: number | string): Promise<Organisation> {
        let client = await getClient();

        let query = {
            text: organisationQueries.GET_ORGANISATION_BY_ID,
            values: [id]
        }

        let organisation = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!organisation) throw(new Error('[Organisation] retrieving Organisation failed'));
        
        return new Organisation({...organisation}, organisation.user);

    }
    static async list(): Promise<Array<Organisation>> {
        let client = await getClient();

        let query = {
            text: organisationQueries.SELECT_ALL_ORGANISATIONS,
            values: []
        }

        let organisations = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!organisations) throw(new Error('[Organisation] retrieving list failed'));
        
        return organisations.map(organisation => new Organisation(organisation , organisation.user));

    }
    static async listPersonOrganisations(personId: number): Promise<Array<Organisation>> {
        let client = await getClient();

        let query = {
            text: organisationQueries.LIST_PERSON_ORGANISATIONS,
            values: [personId]
        }

        let organisations = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!organisations) throw(new Error('[Organisation] retrieving organisations list failed'));
        
        return organisations.map(organisation => new Organisation(organisation , organisation.user));

    }
    static async addMember(organisationId: number, personId: number, role: string, user?: User): Promise<void> {
        let client = await getClient();

        let query = {
            text: organisationQueries.ADD_ORGANISATION_MEMBER,
            values: [organisationId, personId, role, user?.id]
        }

        let organisationMember = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!organisationMember) throw(new Error('[Organisation] member addition failed'));

    }
    static async removeMember(organisationId: number, personId: number): Promise<void> {
        let client = await getClient();

        let query = {
            text: organisationQueries.REMOVE_ORGANISATION_MEMBER,
            values: [organisationId, personId]
        }

        let id = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!id) throw(new Error('[Organisation] member removal failed'));

    }
}

export default Organisation;