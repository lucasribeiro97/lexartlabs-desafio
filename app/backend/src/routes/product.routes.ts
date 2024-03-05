import { Router } from "express";
import ProductController from "../controllers/ProductController";

const productController = new ProductController();

const router = Router();

router.post('/', (req, res) => productController.createProduct(req, res));
router.get('/', (req, res) => productController.getAllProducts(req, res));
router.put('/:id', (req, res) => productController.updateProduct(req, res));

export default router;