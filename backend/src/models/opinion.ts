import { getClient, loadQueries } from '../services/db';
import { User, Person, Issue, OpinionProposal } from '../types';

const opinionQueries = loadQueries('opinions');

class Opinion {
    id: number
    author_id: number
    author: Person
    issue_id: number
    issue: Issue
    summary: string | null
    has_summary: boolean
    content: string | null
    proposals: Array<OpinionProposal>
    num_proposals: number
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
            text: opinionQueries.INSERT_OPINION,
            values: [this.author_id, this.issue_id, this.summary, this.content, this.last_modified_by?.id]
        }

        let opinion = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!opinion) throw(new Error('[opinion] retrieving obj failed'));
    
        this.id = opinion.id;
        this.last_modified_on = opinion.last_modified_on;
    }
    async update(): Promise<void> {
        let client = await getClient();

        let query = {
            text: opinionQueries.UPDATE_OPINION,
            values: [this.id, this.author_id, this.issue_id, this.summary, this.content, this.last_modified_by?.id]
        }

        let opinion = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!opinion) throw(new Error('[Opinion] update failed'));

        Object.assign(this, opinion);

    }
    static async delete(ids: Array<number>): Promise<void> {
        let client = await getClient();

        let query = {
            text: opinionQueries.DELETE_OPINIONS_BY_IDS,
            values: [ids]
        }

        let opinions = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!opinions) throw(new Error('[Opinion] opinions deletion failed'));

    }
    static async getById(id: number | string): Promise<Opinion> {
        let client = await getClient();

        let query = {
            text: opinionQueries.GET_OPINION_BY_ID,
            values: [id]
        }

        let opinion = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!opinion) throw(new Error('[Opinion] retrieving Opinion failed'));
        
        return new Opinion({...opinion}, opinion.user);

    }
    static async list(): Promise<Array<Opinion>> {
        let client = await getClient();

        let query = {
            text: opinionQueries.SELECT_ALL_OPINIONS,
            values: []
        }

        let opinions = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!opinions) throw(new Error('[Opinion] retrieving list failed'));
        
        return opinions.map(opinion => new Opinion(opinion , opinion.user));

    }

    static async listOpinionsByElection(electionId: number): Promise<Array<Opinion>> {
        let client = await getClient();

        let query = {
            text: opinionQueries.LIST_OPINIONS_BY_ELECTION,
            values: [electionId]
        }

        let opinions = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!opinions) throw(new Error('[opinion] retrieving opinions list failed'));
        
        return opinions.map(opinion => new Opinion(opinion , opinion.user));

    }

    static async addProposal(opinionId: number, number: number, content: string, user?: User): Promise<void> {
        let client = await getClient();

        let query = {
            text: opinionQueries.ADD_OPINION_PROPOSAL,
            values: [opinionId, number, content, user?.id]
        }

        let opinionProposal = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!opinionProposal) throw(new Error('[Opinion] proposal addition failed'));

    }

    static async updateProposal(id: number, number: number, content: string, user?: User): Promise<void> {
        let client = await getClient();

        let query = {
            text: opinionQueries.UPDATE_OPINION_PROPOSAL,
            values: [id, number, content, user?.id]
        }

        let opinionProposal = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!opinionProposal) throw(new Error('[Opinion] proposal update failed'));

    }
    

    static async deleteProposals(ids: Array<number>): Promise<void> {
        let client = await getClient();

        let query = {
            text: opinionQueries.DELETE_OPINION_PROPOSALS,
            values: [ids]
        }

        let opinionProposals = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));
        
        client.release();

        if (!opinionProposals) throw(new Error('[Opinion] proposals deletion failed'));

    }


    static async listProposals(opinionId: number): Promise<Array<OpinionProposal>> {
        let client = await getClient();

        let query = {
            text: opinionQueries.LIST_OPINION_PROPOSALS,
            values: [opinionId]
        }

        let opinionProposals = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));
        
        client.release();

        if (!opinionProposals) throw(new Error('[Opinion] proposals retrieval failed'));

        return opinionProposals as Array<OpinionProposal>;

    }
}

export default Opinion;