import productsModel from '../models/products.model';

const getAll = async () => {
  const data = await productsModel.getAll();
  return data;
};

export default {
  getAll,
};