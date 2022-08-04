import jwt from 'jsonwebtoken';
import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';

const secret = 'segredosprofanos';

const getAll = async () => {
  const data = await ordersModel.getAll();
  return data;
};

const create = async (token: any, productsIds: any) => {
  const { data } = jwt.verify(token, secret) as any; 
  const user = { username: data.username, password: data.password };
  const allProducts = await productsModel.getAll();
  const foundProductsIds: any = allProducts.filter((p) => productsIds.includes(p.id));
  console.log(foundProductsIds);
  const userId = await ordersModel.getUserId(user);
  const result = await ordersModel.create(userId.id);
  const { id } = result;
  await Promise.all(foundProductsIds
    .map((p: any) => ordersModel.updateOrdersProducts(p.id, id)));
  return { userId: userId.id, productsIds };
};

export default {
  getAll,
  create,
};