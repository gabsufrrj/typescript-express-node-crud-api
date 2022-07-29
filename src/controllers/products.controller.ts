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

const create = async (req: Request, res: Response) => {
  try {
    const { name, amount } = req.body;
    const product = {
      name,
      amount,
    };

    const data = await productsService.create(product);
    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default {
  getAll,
  create,
};