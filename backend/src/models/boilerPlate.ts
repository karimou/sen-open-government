import { getClient, loadQueries } from "../services/db";

// const electionQueries = loadQueries('elections');

interface User {
    id: number;
    username: string;
}

class MyModel {
    id: number
    date: Date
    type: 'president' | 'parliament'
    description: string
    article_url: string
    created_on: Date
    last_modified_on: Date
    last_modified_by: number | undefined

    constructor({id, date, type, description, article}: { [key: string]: any } , user?: User) {
        this.id = id;
        this.date = date;
        this.type = type;
        this.description = description;
        this.article_url = article;
        this.last_modified_by = user?.id;
    }
    async add(): Promise<void> {
        let client = await getClient();

        let query = {
            text: '',
            values: []
        }

        let myModel = await client.query(query)
            .then(res => res.rows[0]?.id)
            .catch(e => console.log(e));
            
        client.release();

        if (!myModel) throw(new Error('[MyModel] retrieving obj failed'));
        
        this.id = myModel.id;
        this.last_modified_on = myModel.last_modified_on;
    }
    async update(): Promise<void> {
        let client = await getClient();

        let query = {
            text: '',
            values: []
        }

        let myModel = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!myModel) throw(new Error('[MyModel] update failed'));

        Object.assign(this, myModel);

    }
    static async getById(id: number): Promise<MyModel> {
        let client = await getClient();

        let query = {
            text: '',
            values: []
        }

        let myModel = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!myModel) throw(new Error('[MyModel] retrieving obj failed'));
        
        return new MyModel(myModel);

    }
    static async list(): Promise<Array<MyModel>> {
        let client = await getClient();

        let query = {
            text: '',
            values: []
        }

        let myModels = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!myModels) throw(new Error('[MyModel] retrieving list failed'));
        
        return myModels.map(myModel => new MyModel(myModel));

    }
}