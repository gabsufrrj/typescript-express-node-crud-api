import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAll = async (_req: Request, res: Response) => {
  try {
    const data = await productsService.getAll();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default {
  getAll,
};