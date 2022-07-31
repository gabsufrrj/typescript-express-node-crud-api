import { IUser } from '../interfaces/user.interface';
import usersModel from '../models/users.model';

const create = async (user: IUser) => {
  const data = await usersModel.create(user);
  return data;  
};

export default {
  create,
};