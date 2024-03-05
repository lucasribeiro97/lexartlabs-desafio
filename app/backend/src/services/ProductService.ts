import { NewEntity } from "../interfaces";
import { IProduct, IProduct2, IProduct3 } from "../interfaces/products/IProduct";
import { IProductModel } from "../interfaces/products/IProductModel";
import ProductModel from "../models/ProductModel";

export default class ProductService {
  constructor (
    private productModel: IProductModel<IProduct> = new ProductModel()
  ) {}

  public async createProduct(product: IProduct| IProduct2 | IProduct3) {
    if ('details' in product) {
      const newProduct = await this.productModel.createProduct({
        name: product.name,
        brand: product.details.brand,
        model: product.details.model,
        price: product.price,
        color: product.details.color,
      })
      return newProduct
    }

    if ('data' in product) {
      const newProductPromise = product.data.map(async ({ price, color }) => {
        return await this.productModel.createProduct({
          name: product.name,
          brand: product.brand,
          model: product.model,
          price,
          color,
        })
      })
      const newProduct = await Promise.all(newProductPromise);
      return newProduct;
    }

    const newProduct = await this.productModel.createProduct(product);
    return newProduct;
  }
}