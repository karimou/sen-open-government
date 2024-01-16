
import { getClient, loadQueries } from '../services/db';
import crypto from 'crypto';

const userSqlQueries = loadQueries('users');

interface Credentials {
    email: string,
    password: string
};

class User {
    id: number;
    username: string;
    email: string;
    phone: string;

    constructor(userData: { [key:string] : any}) {
        this.id = userData.id;
        this.username = userData.username;
        this.email = userData.email;
        this.phone = userData.phone;
    }
    static async login({email, password}: Credentials) {
        return new Promise(async (resolve: (value: any) => void, reject: (reason?: any) => void) => {
            let passwordHash = crypto.createHash('md5').update(password).digest('hex');
            let client = await getClient();
            let query = {
                text: userSqlQueries.LOGIN,
                values: [email, passwordHash]
            }
            client.query(query)
                .then(res => {
                    if (res.rows[0]) {
                        resolve(new User(res.rows[0]))
                    } else {
                        reject(new Error('incorrect credentials'))
                    }
                })
                .catch(e => reject(e))
                .then(() => client.release());
        });
    }
};

export default User;