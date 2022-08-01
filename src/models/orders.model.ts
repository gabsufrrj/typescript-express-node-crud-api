import { IOrder } from '../interfaces/order.interface';
import connection from './connection';
import generateObject from '../helpers/generateObject';

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
  console.log('promiseReturn', promiseReturn);
  const output = promiseReturn.map((e: any) => {
    if (e.length === 1) return e[0].id;
    return e.map((row: any) => row.id);
  });
  console.log('output', output);

  const final = generateObject(data, output);

  console.log(final);

  return final as any;
};

export default {
  getAll,
  getProductsById,
};