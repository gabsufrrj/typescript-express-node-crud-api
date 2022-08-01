import ordersModel from '../models/orders.model';

const getAll = async () => {
  const data = await ordersModel.getAll();
  return data;
};

export default {
  getAll,
};