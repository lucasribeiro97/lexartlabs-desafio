import { useState } from "react";
import { Product } from "../../utils/types";
import './CreateProduct.css';

const initial_state = {
  name: '',
  brand: '',
  model: '',
  price: 0,
  color: ''
}

function CreateProduct({ selectedProduct }: any) {
  const url = 'http://localhost:3003/products';
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


    if (selectedProduct?.id) {
      await fetch(`${url}/${selectedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(product)
      });
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
          type="text"
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