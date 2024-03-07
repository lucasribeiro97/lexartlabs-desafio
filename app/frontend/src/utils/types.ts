export type Login  = {
  username?: string;
  email: string;
  password: string;
}

export type Product = {
  id?: number | undefined;
  name: string;
  brand: string;
  model: string;
  price: number;
  color: string;
}

export interface Props {
  selectedProduct: Product | null;
  setOpenForm: (isOpen: boolean) => void;
}