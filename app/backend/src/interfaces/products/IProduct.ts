import { Identifiable } from "..";

export interface IProduct extends Identifiable {
  name: string;
  brand: string;
  model: string;
  price: number;
  color: string;
}

export interface IProduct2 extends Identifiable {
  name: string;
  details: {
    brand: string;
    model: string;
    color: string;
  },
  price: number;
}

export interface IProduct3 extends Identifiable {
  name: string;
  brand: string;
  model: string;
  data: {
    price: number,
    color: string,
  }[]
}