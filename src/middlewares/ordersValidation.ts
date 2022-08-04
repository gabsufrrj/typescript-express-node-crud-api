import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const secret = 'segredosprofanos';

const ordersProductsValidation = async (req: Request, res: Response, next: any) => {
  const { productsIds } = req.body;
  if (!productsIds) return res.status(400).json({ message: '"productsIds" is required' });

  if (typeof productsIds !== 'object') {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (productsIds.length === 0) {
    return res.status(422).json({
      message: '"productsIds" must include only numbers',
    });
  }

  next();
};

const tokenValidation = async (req: Request, res: Response, next: any) => {
  const token = req.headers.authorization as string;
  try {
    if (!token) return res.status(401).json({ message: 'Token not found' });
    jwt.verify(token, secret);
  } catch (err) {    
    console.log(err);
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

export default {
  ordersProductsValidation,
  tokenValidation,
};