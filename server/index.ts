import 'reflect-metadata';
import express from 'express';
import { Server } from 'http';
import cors from 'cors';

import { connectTodb } from './db'
import { HTTP_PORT } from './config'

const app = express();
const server = new Server(app);

app.use(cors());
app.get('/', (req, res) => {
  res.end('Hello wolrd!');
});

const startExpressServer = async () => {
  server.listen(HTTP_PORT, () => {
    console.log(`Server listen on ${HTTP_PORT} port`)
  })
}

(async () => {
  try {
    await connectTodb();
    await startExpressServer();
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
})()