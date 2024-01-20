import { getClient, loadQueries } from "../services/db";
import { User } from '../types';

const electionQueries = loadQueries('elections');


class Election {
    id: number
    date: Date
    title: string
    type: 'president' | 'parliament'
    description: string
    created_on: Date
    last_modified_on: Date
    last_modified_by: User | undefined

    constructor(params: { [key: string]: any } , user?: User) {
        Object.assign(this, params);
        this.last_modified_by = user;

    }
    async add(): Promise<void> {
        let client = await getClient();

        let query = {
            text: electionQueries.INSERT_ELECTION,
            values: [this.date, this.title, this.type, this.description, this.last_modified_by?.id]
        }

        let election = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!election) throw(new Error('[MyModel] retrieving obj failed'));
    
        this.id = election.id;
        this.last_modified_on = election.last_modified_on;
    }
    async update(): Promise<void> {
        let client = await getClient();
        let query = {
            text: electionQueries.UPDATE_ELECTION,
            values: [this.id, this.date, this.title, this.type, this.description, this.last_modified_by?.id]
        }

        let election = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!election) throw(new Error('[Election] update failed'));

        Object.assign(this, election);

    }
    static async delete(ids: Array<number>): Promise<void> {
        let client = await getClient();

        let query = {
            text: electionQueries.DELETE_ELECTIONS_BY_IDS,
            values: [ids]
        }

        let elections = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!elections) throw(new Error('[Election] elections deletion failed'));

    }
    static async getById(id: number | string): Promise<Election> {
        let client = await getClient();

        let query = {
            text: electionQueries.GET_ELECTION_BY_ID,
            values: [id]
        }

        let election = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!election) throw(new Error('[Election] retrieving election failed'));
        
        return new Election({...election}, election.user);

    }
    static async list(): Promise<Array<Election>> {
        let client = await getClient();

        let query = {
            text: electionQueries.SELECT_ALL_ELECTIONS,
            values: []
        }

        let elections = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!elections) throw(new Error('[Election] retrieving list failed'));
        
        return elections.map(election => new Election(election , election.user));

    }
    static async listCandidateElections(personId: number): Promise<Array<Election>> {
        let client = await getClient();

        let query = {
            text: electionQueries.LIST_CANDIDATE_ELECTIONS,
            values: [personId]
        }

        let elections = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!elections) throw(new Error('[Election] retrieving elections list failed'));
        
        return elections.map(election => new Election(election , election.user));

    }
    async addCandidate(personId: number, user?: User): Promise<void> {
        let client = await getClient();

        let query = {
            text: electionQueries.ADD_CANDIDATE,
            values: [this.id, personId, user?.id]
        }

        let electionCandidate = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!electionCandidate) throw(new Error('[Election] candidate addition failed'));

    }
}

export default Election;