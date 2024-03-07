import { useState } from "react";
import { Product, Props } from "../../utils/types";
import './CreateProduct.css';
import validateCreateProduct from "../../utils/validateCreateProduct";
import { useNavigate } from "react-router-dom";

const initial_state = {
  name: '',
  brand: '',
  model: '',
  price: 0,
  color: ''
}

function CreateProduct({ selectedProduct, setOpenForm }: Props) {
  const url = 'http://localhost:3003/products';
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>(selectedProduct || initial_state);

  const { name, brand, model, price, color } = product;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) return;

    const isValid = validateCreateProduct(product);
    if (!isValid) return isValid;

    if (selectedProduct?.id) {
      console.log('entrou')
      await fetch(`${url}/${selectedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(product)
      });
      setOpenForm(false);
    } else {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(product)
      });
    }
    navigate('/products');
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="brand"
          placeholder="Marca"
          value={brand}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="model"
          placeholder="Modelo"
          value={model}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="number"
          name="price"
          placeholder="Preço"
          value={price}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="color"
          placeholder="Cor"
          value={color}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="form-button">
          {selectedProduct?.id ? 'Atualizar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;