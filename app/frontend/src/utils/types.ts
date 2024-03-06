export type Login  = {
  username?: string;
  email: string;
  password: string;
}

export type Product = {
  id?: number | string;
  name: string;
  brand: string;
  model: string;
  price: number;
  color: string;
}