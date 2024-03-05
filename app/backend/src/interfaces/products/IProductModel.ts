export interface IProductModel <IProduct> {
  createProduct(product: IProduct): Promise<IProduct>,
}