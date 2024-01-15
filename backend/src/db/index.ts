import { Pool, QueryResult } from 'pg';

let config = {};

if (process.env.NODE_ENV === 'local') {
	config = {
		database: process.env.DATABASE_NAME,
  		max: process.env.DEFAULT_MAX_DB_CONN_PER_WORKER,
	};
} else {
	config = {
		connectionString: process.env.DATABASE_URL,
		ssl: true,
  		max: process.env.DEFAULT_MAX_DB_CONN_PER_WORKER,
	};
}

const pool = new Pool(config);

interface QueryCallback {
	(err: Error, result: QueryResult<any>): void
}

export const query = (text: string, params: any[], callback?: QueryCallback) => {
    if (callback) {
		return pool.query(text, params, callback);
	} else {
		return pool.query(text, params);
	}
};

export const getClient = async () => {
    return await pool.connect();
};