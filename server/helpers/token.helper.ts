import jwt from 'jsonwebtoken';
import { secret, expiresIn } from './../config/jwt.config';

type Data = {
  id: number;
}

export default {
  createToken: (data: Data) => jwt.sign(data, secret, { expiresIn }),
};
