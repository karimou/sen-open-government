import { getClient, loadQueries } from "../services/db";

const electionQueries = loadQueries('elections');

interface User {
    id: number;
    username: string;
}

class Election {
    id: number
    date: Date
    type: 'president' | 'parliament'
    description: string
    article_url: string
    created_on: Date
    last_modified_on: Date
    last_modified_by: number

    constructor({id, date, type, description, article}: { [key: string]: any } , user: User) {
        this.id = id;
        this.date = date;
        this.type = type;
        this.description = description;
        this.article_url = article;
        this.last_modified_by = user.id;
    }
}