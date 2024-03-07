import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Singup/Signup';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Initial from './pages/Initial/Initial';
import CreateProduct from './pages/CreateProduct/CreateProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/products" element={<Products />} />
      <Route path='/create' element={<CreateProduct selectedProduct={null} setOpenForm={() => { }} />} />
    </Routes>
  );
}

export default App;
