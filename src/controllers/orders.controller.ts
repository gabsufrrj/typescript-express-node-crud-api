import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await ordersService.getAll();
    return res.status(200).json(data);
  } catch (err) { 
    return res.status(500).json(err);
  } 
};

export default {
  getAll,
};