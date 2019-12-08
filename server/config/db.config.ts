import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
export const host: string = DB_HOST;
export const port: number = DB_PORT as unknown as number;
export const username: string = DB_USERNAME;
export const password: string = DB_PASSWORD;
export const database: string = DB_NAME;
