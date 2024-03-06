import { Product } from "./types";

const validateCreateProduct = (values: Product) => {
  if (!values.name || !values.brand || !values.model || !values.price || !values.color) {
    window.alert('All fields must be filled');
    return false;
  }

  if (values.price < 0) {
    window.alert('Price must be a positive number');
    return false;
  }

  return true;
};

export default validateCreateProduct;