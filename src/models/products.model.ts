import connection from './connection';
import { IProduct } from '../interfaces/product.interface';
 
const getAll = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const [products] = await connection.execute(query);

  console.log(products);

  return products as IProduct[];
};

export default {
  getAll,
};