import { Op } from "sequelize";
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

  async updateProduct(id: number, product: IProduct): Promise<IProduct | null> {
    const findProduct = await this.model.findByPk(id)

    if (findProduct) {
      await findProduct.update(product, { where: { id } })
    }

    return findProduct
  }

  async deleteProduct(id: number): Promise<IProduct | null> {
    const findProduct = await this.model.findByPk(id)

    if (findProduct) {
      await this.model.destroy({ where: { id } }) 
    }
    
    return findProduct
  }

  async filterProducts(search: string): Promise<IProduct[]> {
    const filteredProducts = await this.model.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${search}%` } },
          { brand: { [Op.iLike]: `%${search}%` } },
          { model: { [Op.iLike]: `%${search}%` } },
          { color: { [Op.iLike]: `%${search}%` } }
        ]
      }
    })

    return filteredProducts
  }
}