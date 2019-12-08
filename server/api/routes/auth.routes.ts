import { Router } from 'express';

import * as authService from './../services/auth.service';
import loginMiddleware from './../middlewares/login.middleware';
import jwtMiddleware from './../middlewares/jwt.middleware';
const router: Router = Router();

router
  .post('/login', loginMiddleware, (req, res, next) => {
    return authService
      .login(req.user)
      .then((data) => res.send(data))
      .catch(next)
  })
  .get('/user', jwtMiddleware, (req, res, next) => authService 
      .getUserById(req.user.id)
      .then(data => res.send(data))
      .catch(next)
  );

export default router;
