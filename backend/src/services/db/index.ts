import { Pool, PoolConfig, QueryResult } from 'pg';
import fs from 'node:fs';
import path from 'path';

var getConfig = ():PoolConfig => {

	if (process.env.NODE_ENV === 'local') {
		return {
			database: process.env.DATABASE_NAME,
			max: process.env.DEFAULT_MAX_DB_CONN_PER_WORKER,
		} as PoolConfig;
	} else {
		return {
			connectionString: process.env.DATABASE_URL,
			ssl: true,
			max: process.env.DEFAULT_MAX_DB_CONN_PER_WORKER,
		} as PoolConfig;
	}
};


var pool: Pool;

interface QueryCallback {
	(err: Error, result: QueryResult<any>): void
}

export const query = (text: string, params: any[], callback?: QueryCallback) => {
	if (!pool) pool = new Pool(getConfig());
    if (callback) {
		return pool.query(text, params, callback);
	} else {
		return pool.query(text, params);
	}
};

export const getClient = async () => {
	if (!pool) pool = new Pool(getConfig());
    return await pool.connect();
};

export const loadQueries = (folderName: string) => {

	const Queries: { [key: string]: string } = {};

	const folderPath = `${__dirname}/../../../sql/${ folderName }/`;

	fs.readdirSync(folderPath).forEach(fileName => {

		let queryName;

		if (fileName.endsWith(".sql")) {

			queryName = fileName.replace('.sql', '');
			Queries[queryName] = fs.readFileSync(path.join(folderPath + fileName), 'utf8');

		} else if (fileName.endsWith(".js")) {

			queryName = fileName.replace('.js', '');
			Queries[queryName] = require(folderPath + fileName);
			
		}
	});

	return Queries;
}
