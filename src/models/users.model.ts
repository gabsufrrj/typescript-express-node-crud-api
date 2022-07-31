import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/user.interface';

const create = async (user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
  VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];
  await connection.execute<ResultSetHeader>(query, values);
  const newUser: IUser = { username, classe, level, password };
  return newUser;
};

export default {
  create,
};