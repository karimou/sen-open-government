import { getClient, loadQueries } from '../services/db';
import { User, Organisation } from '../types';

const personQueries = loadQueries('persons');

class Person {
    id: number
    firstname: string
    lastname: string
    gender: 'M' | 'F'
    date_of_birth: Date
    occupation: string
    description: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    photo: string
    created_on: Date
    last_modified_on: Date
    last_modified_by: User | undefined
    organisations: Array<Organisation> | undefined

    constructor(params: { [key: string]: any }, user?: User) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }

    async add(): Promise<void> {
        let client = await getClient();

        let query = {
            text: personQueries.INSERT_PERSON,
            values: [
                this.firstname, 
                this.lastname, 
                this.gender, 
                this.date_of_birth, 
                this.occupation,
                this.description, 
                this.facebook, 
                this.instagram, 
                this.twitter, 
                this.website, 
                this.photo, 
                this.last_modified_by?.id
            ]
        }

        let person = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!person) throw(new Error('[person] retrieving obj failed'));
    
        this.id = person.id;
        this.last_modified_on = person.last_modified_on;
    }
    async update(): Promise<void> {
        let client = await getClient();

        let query = {
            text: personQueries.UPDATE_PERSON,
            values: [
                this.id, 
                this.firstname, 
                this.lastname, 
                this.gender, 
                this.date_of_birth, 
                this.occupation,
                this.description, 
                this.facebook, 
                this.instagram, 
                this.twitter, 
                this.website, 
                this.photo, 
                this.last_modified_by?.id
            ]
        }

        let person = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!person) throw(new Error('[person] update failed'));

        Object.assign(this, person);

    }
    static async delete(ids: Array<number>): Promise<void> {
        let client = await getClient();

        let query = {
            text: personQueries.DELETE_PERSONS_BY_IDS,
            values: [ids]
        }

        let persons = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!persons) throw(new Error('[person] persons deletion failed'));

    }
    static async getById(id: number | string): Promise<Person> {
        let client = await getClient();

        let query = {
            text: personQueries.GET_PERSON_BY_ID,
            values: [id]
        }

        let person = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!person) throw(new Error('[person] retrieving person failed'));
        
        return new Person({...person}, person.user);

    }
    static async list(): Promise<Array<Person>> {
        let client = await getClient();

        let query = {
            text: personQueries.SELECT_ALL_PERSONS,
            values: []
        }

        let persons = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!persons) throw(new Error('[person] retrieving list failed'));
        
        return persons.map(person => new Person(person , person.user));

    }
    static async listElectionCandidates(electionId: number): Promise<Array<Person>> {
        let client = await getClient();

        let query = {
            text: personQueries.LIST_ELECTION_CANDIDATES,
            values: [electionId]
        }

        let persons = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!persons) throw(new Error('[person] retrieving persons list failed'));
        
        return persons.map(person => new Person(person , person.user));

    }
    static async listOrganisationMembers(organisationId: number): Promise<Array<Person>> {
        let client = await getClient();

        let query = {
            text: personQueries.LIST_ORGANISATION_MEMBERS,
            values: [organisationId]
        }

        let persons = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!persons) throw(new Error('[person] retrieving persons list failed'));
        
        return persons.map(person => new Person(person , person.user));

    }
    async addElection(electionId: number, user?: User): Promise<void> {
        let client = await getClient();

        let query = {
            text: personQueries.ADD_ELECTION,
            values: [this.id, electionId, user?.id]
        }

        let electionCandidate = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!electionCandidate) throw(new Error('[Person] candidate addition failed'));

    }
}

export default Person;

