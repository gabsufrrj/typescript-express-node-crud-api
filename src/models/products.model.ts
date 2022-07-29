import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/product.interface';
 
const getAll = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const [products] = await connection.execute(query);

  console.log(products);

  return products as IProduct[];
};

const create = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) values (?, ?)';
  const values = [name, amount];
  
  const [data] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = data;

  const newProduct: IProduct = { id, name, amount };
  return newProduct;
};

export default {
  getAll,
  create,
};