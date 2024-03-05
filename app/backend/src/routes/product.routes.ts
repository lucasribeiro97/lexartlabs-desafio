import { Router } from "express";
import ProductController from "../controllers/ProductController";

const productController = new ProductController();

const router = Router();

router.post('/', (req, res) => productController.createProduct(req, res));

export default router;