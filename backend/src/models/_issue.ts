import { getClient, loadQueries } from '../services/db';
import { User } from '../types';

const issueQueries = loadQueries('issues');

class Issue {
    id: number
    title: string
    description: string
    created_on: Date
    last_modified_on: Date
    last_modified_by: User | undefined

    constructor(params: { [key: string]: any }, user?: User) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }
}

export default Issue;