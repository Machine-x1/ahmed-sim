/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { setCookie } from 'cookies-next';

import requestHandler from './requestHandler';

// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require('bcrypt');

const createToken = async () => {
  // const secretKey = await createSecretHash('web')
  const secretKey = '1231231233721283918273WEB';
  const timestamp = Date.now();
  const finalLocalToken = secretKey + timestamp;
  const hashed = bcrypt.hashSync(
    finalLocalToken,
    10,
    (_err: any, hash: any) => {
      return hash;
    }
  );
  return [hashed.split('$')[3], timestamp];
};

const createTokenAndUser = async ({ req, res }: { req: any; res: any }) => {
  const [hashed, timestamp] = await createToken();
  const handleCreateTokenRequest = await requestHandler('createToken', 'POST', {
    platform: 'web',
    token: hashed,
    timestamp,
  });
  const { user } = handleCreateTokenRequest.data;
  const { token } = handleCreateTokenRequest.data.user;
  setCookie('token', token, { req, res });
  setCookie('user', user, { req, res });

  return handleCreateTokenRequest;
};

export default createTokenAndUser;
