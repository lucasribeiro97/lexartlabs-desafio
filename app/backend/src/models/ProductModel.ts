import SequelizeProduct from "../database/models/SequelizeProducts";
import { IProduct } from "../interfaces/products/IProduct";
import { IProductModel } from "../interfaces/products/IProductModel";

export default class ProductModel implements IProductModel<IProduct> {
  private model = SequelizeProduct;

  async createProduct(product: IProduct): Promise<IProduct> {
    const newProduct = await this.model.create(product)
    return newProduct
  }
}