import { Router } from 'express';
import UserController from '../controllers/UserController';
import validations from '../middlewares/Validations';

const userController = new UserController();

const router = Router();

router.post('/', validations.validateUserCreation, (req, res) => userController.createUser(req, res));

export default router;