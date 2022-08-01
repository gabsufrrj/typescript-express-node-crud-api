import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/user.interface';
import { ILogin } from '../interfaces/login.interface';

export const getUser = async (user: ILogin): Promise<ILogin> => {
  const { username, password } = user;
  const query = `SELECT username, password FROM Trybesmith.Users
  WHERE username = ? AND password = ?;`;
  const values = [username, password];
  const [result] = await connection.execute(query, values);
  const [returnedUser] = result as ILogin[];
  return returnedUser;
};

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