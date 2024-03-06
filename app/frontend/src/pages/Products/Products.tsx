import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../../utils/types";

function Products() {
  const url = 'http://localhost:3003/products';

  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');

    const fetchProducts = async () => {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response);
      const data = await response.json();
      setProducts(data);
      console.log(products);
    };
    fetchProducts();
  }, []);

  

  return (
    <div>
      <h1>Produtos</h1>
      {products.map((product) => (
        <div>
          <h2>{product.name}</h2>
          <p>{product.brand}</p>
          <p>{product.model}</p>
          <p>{product.price}</p>
          <p>{product.color}</p>
          <button>
            <Link to="/update">Editar</Link>
          </button>
        </div>
      ))}
      <Link to="/create">Cadastre um produto</Link>
    </div>
  )
}

export default Products;