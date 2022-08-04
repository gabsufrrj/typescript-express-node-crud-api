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

const create = async (req: Request, res: Response) => {
  try {
    const { productsIds } = req.body;
    const token = req.headers.authorization;    
    const result = await ordersService.create(token, productsIds);
    return res.status(201).json(result);
  } catch (err) { 
    console.log(err);
    return res.status(500).json(err);
  } 
};

export default {
  getAll,
  create,
};