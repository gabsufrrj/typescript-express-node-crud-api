import { Router } from 'express';
import productsController from '../controllers/products.controller';
import productsValidation from '../middlewares/productsValidation';

const router = Router();

router.get('/', productsController.getAll);

router.post(
  '/', 
  productsValidation.nameValidation,
  productsValidation.amountValidation,
  productsController.create,
);

export default router;
