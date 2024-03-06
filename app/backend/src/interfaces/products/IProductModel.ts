export interface IProductModel <IProduct> {
  createProduct(product: IProduct): Promise<IProduct>,
  getAllProducts(): Promise<IProduct[]>,
  updateProduct(id:number, product: IProduct): Promise<IProduct | null>,
  deleteProduct(id:number): Promise<IProduct | null>,
}