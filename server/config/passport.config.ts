import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

import { secret } from './jwt.config';
import users from './users.config';

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
}

passport.use(
  'login',
  new LocalStrategy(
    { usernameField: 'login', passwordField: 'password' },
    async (login, password, done) => {
      try {
        const user = users.find(user => user.login === login);
        if (!user) {
          return done({ status: 401, message: 'Incorrect login.' }, false);
        }
        const { password: userPassword, ...userToSend } = user;

        return userPassword === password
          ? done(null, userToSend)
          : done({ status: 401, message: 'Wrong password.' }, null)
      } catch(err) {
        return done(err, null);
      }
    })
)

passport.use(
  new JwtStrategy(options, async ({ id }, done) => {
    try {
      const user = users.find(user => user.id === id);
      return user
        ? done(null, user)
        : done({ status: 401, message: 'Token is invalid.' }, null)
    } catch (err) {
      return done(err)
    }
  }),
)

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));
