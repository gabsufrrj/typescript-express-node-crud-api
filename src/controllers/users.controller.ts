import { Request, Response } from 'express';
import usersService from '../services/users.service';
import { IUser } from '../interfaces/user.interface';
import createToken from '../helpers/createToken';

const create = async (req: Request, res: Response) => {
  try {
    const { username, classe, level, password } = req.body;
    const user: IUser = { username, classe, level, password };
    await usersService.create(user);
    const token = createToken(user);
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default {
  create,
};