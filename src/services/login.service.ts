import { ILogin } from '../interfaces/login.interface';
import { getUser } from '../models/users.model';
import tokenHelper from '../helpers/createToken';

const login = async (loginRequest: ILogin): Promise<object> => {
  if (!loginRequest.password) return { status: 400, message: '"password" is required' };
  if (!loginRequest.username) return { status: 400, message: '"username" is required' };

  const userVerify = await getUser(loginRequest);
  
  if (!userVerify) {    
    return { status: 401, message: 'Username or password invalid' };
  }
  
  const token = tokenHelper.createLoginToken(userVerify);
  return { status: 200, token };
};

export default {
  login,
};