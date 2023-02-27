import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import SessionUtil from '@src/util/SessionUtil';
import AuthService from '@src/services/AuthService';

import { IReq, IRes } from './types/express/misc';

interface ILoginReq {
  email: string;
  password: string;
}

async function login(req: IReq<ILoginReq>, res: IRes) {
  const { email, password } = req.body;
  // Login
  const user = await AuthService.login(email, password);
  // Setup Admin Cookie
  await SessionUtil.addSessionData(res, {
    id: user.id,
    email: user.name,
    name: user.name,
    role: user.role,
  });
  // Return
  return res.status(HttpStatusCodes.OK).end();
}

export default {
  login,
} as const;
