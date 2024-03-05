export interface IProductModel <IProduct> {
  createProduct(product: IProduct): Promise<IProduct>,
  getAllProducts(): Promise<IProduct[]>,
  updateProduct(id:number, price: number): Promise<IProduct | null>,
}