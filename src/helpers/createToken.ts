import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces/user.interface';
import { ILogin } from '../interfaces/login.interface';

dotenv.config();

const jwtConfig:object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = 'segredosprofanos';

const createToken = (user: IUser) => {
  const payload = {
    username: user.username,
    classe: user.classe,
    level: user.level,   
  };

  const token = jwt.sign({ data: payload }, secret, jwtConfig);

  return token;
};

const createLoginToken = (user: ILogin) => {
  const payload = {
    username: user.username,
    password: user.password, 
  };

  const token = jwt.sign({ data: payload }, secret, jwtConfig);

  return token;
};

export default {
  createToken,
  createLoginToken,
};
