import { Route, Routes } from 'react-router-dom';
import './App.css';
import Singup from './pages/Singup';
import Login from './pages/Login';
import Products from './pages/Products';
import Initial from './pages/Initial';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Initial /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/sign-up" element={ <Singup /> } />
      <Route path="/products" element={ <Products /> } />
    </Routes>
  );
}

export default App;
