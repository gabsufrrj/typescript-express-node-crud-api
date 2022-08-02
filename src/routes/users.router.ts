import { Router } from 'express';
import usersController from '../controllers/users.controller';
import usersValidation from '../middlewares/usersValidation';

const router = Router();

router.post(
  '/',
  usersValidation.usernameValidation,
  usersValidation.classeValidation,
  usersValidation.levelValidation,
  usersValidation.passwordValidation,
  usersController.create,
);

export default router;
