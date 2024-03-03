import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

export default class Validations {
  static authenticate(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const [type, token] = req.headers.authorization.split(' ');

    if (type !== 'Bearer') {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    try {
      const secret = 'jwt_secret';
      const payload = jwt.verify(token, secret);
      res.locals.auth = payload;
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    next();
  }

  static validateLogin(req: Request, res: Response, next: NextFunction) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    if (!regexEmail.test(email) || password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    next();
  }

  static validateUserCreation(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      username: Joi.string().required(),
    })

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    return next();
  }
}