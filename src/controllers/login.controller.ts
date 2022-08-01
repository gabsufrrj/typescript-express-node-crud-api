import { Request, Response } from 'express';
import loginService from '../services/login.service';

interface IResult {
  status: number;
  message?: string;
  token?: string;
}

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = { username, password };
  const result = await loginService.login(user);
  const { status, message, token } = result as IResult;
  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token });
};

export default {
  login,
};