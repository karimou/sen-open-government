import { getClient, loadQueries } from '../services/db';
import { User } from '../types';

const issueQueries = loadQueries('issues');

class Issue {
    id: number
    title: string
    short_description: string
    long_description: string
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
            text: issueQueries.INSERT_ISSUE,
            values: [this.title, this.short_description, this.long_description, this.last_modified_by?.id]
        }

        let issue = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!issue) throw(new Error('[issue] retrieving obj failed'));
    
        this.id = issue.id;
        this.last_modified_on = issue.last_modified_on;
    }
    async update(): Promise<void> {
        let client = await getClient();

        let query = {
            text: issueQueries.UPDATE_ISSUE,
            values: [this.id, this.title, this.short_description, this.long_description, this.last_modified_by?.id]
        }

        let issue = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!issue) throw(new Error('[Issue] update failed'));

        Object.assign(this, issue);

    }
    static async delete(ids: Array<number>): Promise<void> {
        let client = await getClient();

        let query = {
            text: issueQueries.DELETE_ISSUES_BY_IDS,
            values: [ids]
        }

        let issues = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!issues) throw(new Error('[Issue] issues deletion failed'));

    }
    static async getById(id: number | string): Promise<Issue> {
        let client = await getClient();

        let query = {
            text: issueQueries.GET_ISSUE_BY_ID,
            values: [id]
        }

        let issue = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!issue) throw(new Error('[Issue] retrieving Issue failed'));
        
        return new Issue({...issue}, issue.user);

    }
    static async list(): Promise<Array<Issue>> {
        let client = await getClient();

        let query = {
            text: issueQueries.SELECT_ALL_ISSUES,
            values: []
        }

        let issues = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!issues) throw(new Error('[Issue] retrieving list failed'));
        
        return issues.map(issue => new Issue(issue , issue.user));

    }
}

export default Issue;