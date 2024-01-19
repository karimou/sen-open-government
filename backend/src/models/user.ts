
import { getClient, loadQueries } from '../services/db';
import crypto from 'crypto';

const userQueries = loadQueries('users');

interface Credentials {
    email: string,
    password: string
};

class User {
    id: number;
    username: string;
    password: string | null;
    email: string;
    phone: string;
    joined_on: Date;
    last_modified_on: Date;
    last_modified_by: User | undefined;


    constructor(params: { [key: string]: any }, user?: User) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }

    async login() {
        let client = await getClient();
        let passwordHash = crypto.createHash('md5').update(this.password as string).digest('hex');

        let query = {
            text: userQueries.LOGIN,
            values: [this.email, passwordHash]
        }

        let user = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!user) throw(new Error('Incorrect credentials'));
    
        this.id = user.id;
        this.username = user.username;
        this.password = null;
        
    }
    async add(): Promise<void> {
        let client = await getClient();
        let passwordHash = crypto.createHash('md5').update(this.password as string).digest('hex');

        let query = {
            text: userQueries.INSERT_USER,
            values: [this.username, this.email, this.phone, passwordHash, this.last_modified_by?.id]
        }

        let user = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));
        
        client.release();

        if (!user) throw(new Error('[user] retrieving obj failed'));
    
        this.id = user.id;
        this.last_modified_on = user.last_modified_on;
    }
    async update(): Promise<void> {
        let client = await getClient();

        let query = {
            text: userQueries.UPDATE_USER,
            values: [this.id, this.username, this.email, this.phone, this.last_modified_by?.id]
        }

        let user = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!user) throw(new Error('[user] update failed'));

        Object.assign(this, user);

    }
    static async delete(ids: Array<number>): Promise<void> {
        let client = await getClient();

        let query = {
            text: userQueries.DELETE_USERS_BY_IDS,
            values: [ids]
        }

        let users = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!users) throw(new Error('[user] users deletion failed'));

    }
    static async getById(id: number | string): Promise<User> {
        let client = await getClient();

        let query = {
            text: userQueries.GET_USER_BY_ID,
            values: [id]
        }

        let user = await client.query(query)
            .then(res => res.rows[0])
            .catch(e => console.log(e));

        client.release();

        if (!user) throw(new Error('[user] retrieving user failed'));
        
        return new User({...user}, user.user);

    }
    static async list(): Promise<Array<User>> {
        let client = await getClient();

        let query = {
            text: userQueries.SELECT_ALL_USERS,
            values: []
        }

        let users = await client.query(query)
            .then(res => res.rows)
            .catch(e => console.log(e));

        client.release();

        if (!users) throw(new Error('[user] retrieving list failed'));
        
        return users.map(user => new User(user , user.user));

    }
};

export default User;