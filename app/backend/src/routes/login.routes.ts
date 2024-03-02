import { Router } from 'express';
import Validation from '../middlewares/Validations';
import UserController from '../controllers/UserController';

const userController = new UserController();

const router = Router();

router.post('/', Validation.validateLogin, (req, res) => userController.login(req, res));
router.get('/role', Validation.authenticate, (req, res) => userController.getRole(req, res));

export default router;