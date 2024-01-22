
import { getClient, loadQueries } from "../services/db";
import { User } from '../types';

const fileQueries = loadQueries('files');

class MyFile {
    id: number
    name: string
    mime_type: string
    url: string
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
            text: fileQueries.INSERT_FILE,
            values: [this.name, this.mime_type, this.url, this.last_modified_by?.id]
        }

        let file = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!file) throw(new Error('[file] creating obj failed'));

        this.id = file.id;
        this.last_modified_on = file.last_modified_on;
    }
    static async list(): Promise<Array<MyFile>> {
        let client = await getClient();

        let query = {
            text: fileQueries.SELECT_ALL_FILES,
            values: []
        }

        let files = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!files) throw(new Error('[File] retrieving list failed'));
        
        return files.map(file => new MyFile(file , file.user));

    }
}

export default MyFile;