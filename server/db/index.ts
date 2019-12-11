import { createConnection, ConnectionOptions, Connection } from 'typeorm';

import { host, port, username, password, database  } from './../config/db.config'
import entities from './models';

export const connectTodb = async (): Promise<void> => {
  try {
    const config: ConnectionOptions = {
      name: 'default',
      type: 'postgres',
      host,
      port,
      username,
      password,
      database,
      entities,
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