import * as sql from 'mssql';

const sqlConfig = {
    user: 'sa', //process.env.DB_USER,
    password: 'Passme1234!',//process.env.DB_PWD,
    database: 'DevDB', //process.env.DB_NAME,
    server: 'localhost',
    options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

let pool: sql.ConnectionPool | undefined;

export async function connect(): Promise<void> {
    pool = await sql.connect(sqlConfig);
}

export async function disconnect(): Promise<void> {
    if (pool) {
        pool.close();
    }
}