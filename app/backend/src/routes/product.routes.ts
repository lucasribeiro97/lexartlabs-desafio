import { Router } from "express";
import ProductController from "../controllers/ProductController";
import Validation from "../middlewares/Validations";

const productController = new ProductController();

const router = Router();

router.post('/', Validation.authenticate, (req, res) => productController.createProduct(req, res));
router.get('/', Validation.authenticate, (req, res) => productController.getAllProducts(req, res));
router.put('/:id', Validation.authenticate, (req, res) => productController.updateProduct(req, res));
router.delete('/:id', Validation.authenticate, (req, res) => productController.deleteProduct(req, res));
router.get('/filter', Validation.authenticate, (req, res) => productController.filterProducts(req, res));

export default router;