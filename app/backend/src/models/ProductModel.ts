import SequelizeProduct from "../database/models/SequelizeProducts";
import { IProduct } from "../interfaces/products/IProduct";
import { IProductModel } from "../interfaces/products/IProductModel";

export default class ProductModel implements IProductModel<IProduct> {
  private model = SequelizeProduct;

  async createProduct(product: IProduct): Promise<IProduct> {
    const newProduct = await this.model.create(product)
    return newProduct
  }

  async getAllProducts(): Promise<IProduct[]> {
    const products = await this.model.findAll()
    return products
  }

  async updateProduct(id: number, price: number): Promise<IProduct | null> {
    const findProduct = await this.model.findByPk(id)

    if (findProduct) {
      await findProduct.update({ price }, { where: { id } })
    }

    return findProduct
  }
}