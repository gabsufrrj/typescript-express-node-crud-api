import { Request, Response } from 'express';

const usernameValidation = async (req: Request, res: Response, next: any) => {
  const { username } = req.body;
  console.log(username);
  if (!username) return res.status(400).json({ message: '"username" is required' });

  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  
  if (username.length <= 2 || typeof username !== 'string') {
    return res.status(422).json({ 
      message: '"username" length must be at least 3 characters long' });
  }  

  next();
};

const classeValidation = async (req: Request, res: Response, next: any) => {
  const { classe } = req.body;
  if (!classe) return res.status(400).json({ message: '"classe" is required' });

  if (typeof classe !== 'string') {
    return res.status(422).json({ message: '"classe" must be a string' });
  }

  if (classe.length <= 2) {
    return res.status(422).json({ 
      message: '"classe" length must be at least 3 characters long' });
  }

  next();
};

const levelValidation = async (req: Request, res: Response, next: any) => {
  const { level } = req.body;
  if (!level && level !== 0) return res.status(400).json({ message: '"level" is required' });

  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }

  if (Number(level) < 1) {
    return res.status(422).json({ 
      message: '"level" must be greater than or equal to 1' });
  }

  next();
};

const passwordValidation = async (req: Request, res: Response, next: any) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });

  if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }

  if (password.length < 8) {
    return res.status(422).json({ 
      message: '"password" length must be at least 8 characters long' });
  }

  next();
};

export default {
  usernameValidation,
  classeValidation,
  levelValidation,
  passwordValidation,
};