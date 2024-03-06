import { ServiceMessage, ServiceResponse } from "../interfaces/ServiceResponse";
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

  public async getAllProducts() {
    const products = await this.productModel.getAllProducts();
    return { status: 'SUCCESSFUL', data: products };
  }

  public async updateProduct(id: number, product: IProduct): Promise<ServiceResponse<ServiceMessage>> {
    const updatedProduct = await this.productModel.updateProduct(id, product);

    if (!updatedProduct) {
      return { status: 'INVALID_DATA', data: { message: 'Product not found' } }
    }

    return { status: 'SUCCESSFUL', data: { message: 'Product updated' } }
  }

  public async deleteProduct(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const deletedProduct = await this.productModel.deleteProduct(id);

    if (!deletedProduct) {
      return { status: 'INVALID_DATA', data: { message: 'Product not found' } }
    }

    return { status: 'SUCCESSFUL', data: { message: 'Product deleted' } }
  }
}