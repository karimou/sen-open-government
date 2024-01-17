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

    constructor({id, name, type, description, twitter, facebook, instagram, website, address, contact_phone, contact_email, parent_organisation, parent_organisation_id, created_on, last_modified_on}: { [key: string]: any }, user?: User) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.twitter = twitter;
        this.facebook = facebook;
        this.instagram = instagram;
        this.website = website;
        this.address = address;
        this.contact_phone = contact_phone;
        this.contact_email = contact_email;
        this.parent_organisation = parent_organisation;
        this.parent_organisation_id = parent_organisation_id;
        this.created_on = created_on;
        this.last_modified_on = last_modified_on;
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
}

export default Organisation;