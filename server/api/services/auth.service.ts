import tokenHelper from './../../helpers/token.helper';
import users from './../../config/users.config';

export const login = async ({ password: _, ...user }: any) => {
  return {
    token: tokenHelper.createToken({ id: user.id }),
    user,
  };
};

export const getUserById = async (userId: number) => {
  const user = users.find(({ id }) => id === userId);
  const { password, ...userToSend } = user;

  return userToSend;
}
