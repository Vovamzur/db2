import { Application } from 'express'
import authRoutes from './auth.routes';
import studentRoutes from './stuents.route';

export default (app: Application) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/students', studentRoutes);
}
