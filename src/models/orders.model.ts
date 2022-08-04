import { ResultSetHeader } from 'mysql2';
import { IOrder } from '../interfaces/order.interface';
import { ILogin } from '../interfaces/login.interface';
import connection from './connection';
import generateObject from '../helpers/generateObject';
import { IProduct } from '../interfaces/product.interface';

const getProductsById = async (id: number) => {
  const query = `SELECT id FROM Trybesmith.Products
  WHERE orderId = ?;`;

  const values = [id];

  const [result] = await connection.execute(query, values);

  return result;
};

const getAll = async (): Promise<IOrder<number>[]> => {
  const query = 'SELECT * FROM Trybesmith.Orders;';

  const [result] = await connection.execute(query);
  const data = result as IOrder<number>[];
  const promiseReturn = await Promise.all(data.map((row) => getProductsById(row.id)));
  const output = promiseReturn.map((e: any) => {
    if (e.length === 1) return e[0].id;
    return e.map((row: any) => row.id);
  });

  const final = generateObject(data, output);

  return final as any;
};

const getUserId = async (user: ILogin): Promise<any> => {
  const { username, password } = user;
  console.log('user', user);
  const query = `SELECT id FROM Trybesmith.Users
  WHERE username = ? AND password = ?;`;
  const values = [username, password];
  const [result] = await connection.execute(query, values);
  const [returnedUserId] = result as ILogin[];
  return returnedUserId;
};

const updateOrdersProducts = async (productId: IProduct, orderId: any): Promise<any> => {
  const query = `UPDATE Trybesmith.Products SET orderId = ?
    WHERE id = ?`;
  const values = [orderId, productId];
  console.log(values);
  const [result] = await connection.execute(query, values);
  return result;
};

const create = async (id: any): Promise<any> => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [id]);
  const { insertId } = result;
  const output = { id: insertId, userId: id };
  return output;
};

export default {
  getAll,
  getProductsById,
  create,
  getUserId,
  updateOrdersProducts,
};