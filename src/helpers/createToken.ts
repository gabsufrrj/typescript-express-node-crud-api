import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces/user.interface';

dotenv.config();

const jwtConfig:object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret:any = process.env.JWT_SECRET;

const createToken = (user: IUser) => {
  const payload = {
    username: user.username,
    classe: user.classe,
    level: user.level,   
  };

  const token = jwt.sign({ data: payload }, secret, jwtConfig);

  return token;
};

export default createToken;
