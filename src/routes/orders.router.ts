import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import ordersMiddleware from '../middlewares/ordersValidation';

const router = Router();

router.get('/', ordersController.getAll);

router.post(
  '/', 
  ordersMiddleware.tokenValidation,
  ordersMiddleware.ordersProductsValidation,
  ordersController.create,
);

export default router;