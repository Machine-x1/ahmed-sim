import requestHandler from './requestHandler';

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

const createTokenAndUser = async () => {
  const [hashed, timestamp] = await createToken();
  const handleCreateTokenRequest = await requestHandler('createToken', 'POST', {
    platform: 'web',
    token: hashed,
    timestamp,
  });

  return handleCreateTokenRequest;
};

export default createTokenAndUser;
