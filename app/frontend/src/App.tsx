import { Route, Routes } from 'react-router-dom';
import './App.css';
import Singup from './pages/Singup';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Singup /> } />
      <Route path="/counter" element={ <Login /> } />
    </Routes>
  );
}

export default App;
