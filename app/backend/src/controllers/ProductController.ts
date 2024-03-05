import { Request, Response } from "express";
import { IProduct, IProduct2, IProduct3 } from "../interfaces/products/IProduct";
import ProductService from "../services/ProductService";

export default class ProductController {
  constructor(
    private productService = new ProductService(),
  ) { }

  public async createProduct(req: Request, res: Response) {
    const product = req.body;

    if (Array.isArray(product)) {
      const mappedProducts = product.map(async (product) => {
        await this.productService.createProduct(product);
      });
      const newProducts = await Promise.all(mappedProducts);
      return res.status(200).json(newProducts);
    }

    const newProduct = await this.productService.createProduct(product as IProduct | IProduct2 | IProduct3);
    return res.status(201).json(newProduct);
  }

  public async getAllProducts(req: Request, res: Response) {
    const products = await this.productService.getAllProducts();
    return res.status(200).json(products);
  }

  public async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { price } = req.body;
    const { status, data} = await this.productService.updateProduct(Number(id), price);
    return res.status(200).json(data);
  }

  public async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.productService.deleteProduct(Number(id));
    return res.status(200).json(data);
  }
}