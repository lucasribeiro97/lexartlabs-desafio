import { useState } from "react";
import { Product } from "../../utils/types";

const initial_state = {
  name: '',
  brand: '',
  model: '',
  price: 0,
  color: ''
}

function CreateProduct() {
  const url = 'http://localhost:3003/products';
  const [product, setProduct] = useState<Product>(initial_state);

  const { name, brand, model, price, color } = product;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event.target)
    const token = localStorage.getItem('token');
    if (!token) return;

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(product)
    });
  }


  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={ name }
          onChange={ handleChange }
        />
        <input
          type="text"
          name="brand"
          placeholder="Marca"
          value={ brand }
          onChange={ handleChange }
        />
        <input
          type="text"
          name="model"
          placeholder="Modelo"
          value={ model }
          onChange={ handleChange }
        />
        <input
          type="text"
          name="price"
          placeholder="Preço"
          value={ price }
          onChange={ handleChange }
        />
        <input
          type="text"
          name="color"
          placeholder="Cor"
          value={ color }
          onChange={ handleChange }
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CreateProduct;