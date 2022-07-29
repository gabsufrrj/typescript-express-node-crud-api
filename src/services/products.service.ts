import { IProduct } from '../interfaces/product.interface';
import productsModel from '../models/products.model';

const getAll = async () => {
  const data = await productsModel.getAll();
  return data;
};

const create = async (product: IProduct) => {
  const data = await productsModel.create(product);
  return data;
};

export default {
  getAll,
  create,
};