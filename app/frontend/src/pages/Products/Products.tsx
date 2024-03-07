import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../../utils/types";
import './Products.css';
import CreateProduct from "../CreateProduct/CreateProduct";

function Products() {
  const url = 'http://localhost:3003/products';

  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [searchProducts, setSearchProducts] = useState('');
  const [id, setId] = useState<number | undefined>(0);

  const token = localStorage.getItem('token');
  if (!token) navigate('/login');

  const handleFilter = async () => {
    if (searchProducts.length > 0) {
      const response = await fetch(`${url}/filter?search=${searchProducts}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setProducts(data);
    }
  }

  const fetchProducts = async () => {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [openForm]);

  const removeProduct = async (id: number | undefined) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchProducts();
    }
  };

  return (
    <div className="products-container">
      <h1>Produtos</h1>
      <div>
        <input
          type="text"
          name="procurar"
          placeholder="Pesquisar"
          onChange={(e) => setSearchProducts(e.target.value)}
        />
        <button onClick={() => handleFilter()}>Pesquisar</button>
      </div>
      <Link to="/create" className="add-product-link">Cadastre um produto</Link>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {openForm && product.id === id ?
              <CreateProduct selectedProduct={product} setOpenForm={setOpenForm} />
              :
              <>
                <h2>{product.name}</h2>
                <p>Marca: {product.brand}</p>
                <p>Modelo: {product.model}</p>
                <p>Preço: R${product.price.toFixed(2)}</p>
                <p>Cor: {product.color}</p>
              </>
            }
            <div className="product-buttons">
              <button onClick={() => {
                setOpenForm(!openForm)
                setId(product.id)
              }}
                disabled={openForm && product.id !== id ? true : false}
              >
                {openForm && product.id === id ? 'Cancelar' : 'Editar'}
              </button>
              <button onClick={() => removeProduct(product.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products;