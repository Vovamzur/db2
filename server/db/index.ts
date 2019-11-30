import { createConnection, ConnectionOptions, Connection } from 'typeorm';

import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } from './../config'
import Entities from './../models';

export const connectTodb = async (): Promise<void> => {
  try {
    const config: ConnectionOptions = {
      name: 'default',
      type: 'postgres',
      host: DB_HOST as string,
      port: DB_PORT as number,
      username: DB_USERNAME as string,
      password: DB_PASSWORD as string,
      database: DB_NAME as string,
      entities: Entities,
    }
    const connection: Connection = await createConnection(config);
    process.on('SIGINT', () => {
      connection.close();
    });
    console.log('Connected to postgree db!')
  } catch(err) {
    console.error(err)
  }
} 