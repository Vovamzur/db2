import 'reflect-metadata';
import express, { Application } from 'express';
import { Server } from 'http';
import cors from 'cors';
import passport from 'passport';
import path from 'path';

import routes from './api/routes';
import { connectTodb } from './db';
import { port } from './config/port.config';
import errorHandlerMiddlerware from './api/middlewares/error-handler.middleware';
import './config/passport.config';

const app: Application = express();
const server: Server = new Server(app);
const staticPath: string = path.resolve(`${__dirname}/../client/build`);

const startExpressServer = async () => {
  server.listen(port, () => {
    console.log(`Server listen on ${port} port`)
  })
}

const applyMiddlewares = async () => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(passport.initialize());
  routes(app);
  app.use(express.static(staticPath));
  app.use(errorHandlerMiddlerware);
}

(async () => {
  try {
    await connectTodb();
    await applyMiddlewares();
    await startExpressServer();
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
})();
