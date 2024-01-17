import { getClient, loadQueries } from "../services/db";

const electionQueries = loadQueries('elections');

interface User {
    id: number;
    username: string;
}

class Election {
    id: number
    date: Date
    title: string
    type: 'president' | 'parliament'
    description: string
    article_url: string
    created_on: Date
    last_modified_on: Date
    last_modified_by: User | undefined

    constructor({id, date, title, type, description, article, created_on, last_modified_on}: { [key: string]: any } , user?: User) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.type = type;
        this.description = description;
        this.article_url = article;
        this.created_on = created_on;
        this.last_modified_on = last_modified_on;
        this.last_modified_by = user;

    }
    async add(): Promise<void> {
        let client = await getClient();

        let query = {
            text: electionQueries.INSERT_ELECTION,
            values: [this.date, this.title, this.type, this.description, this.article_url, this.last_modified_by?.id]
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
            values: [this.id, this.date, this.title, this.type, this.description, this.article_url, this.last_modified_by?.id]
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
}

export default Election;