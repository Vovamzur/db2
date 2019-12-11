import { Router, Request, Response, NextFunction } from 'express';

import * as studentService from '../services/students.service';

const router: Router = Router();

router.
  get('/classes', (req: Request, res: Response, next: NextFunction) =>
    studentService
      .getClasses()
      .then(values => res.json(values))
      .catch(next)
    )

export default router;
