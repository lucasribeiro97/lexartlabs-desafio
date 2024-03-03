import { Route, Routes } from 'react-router-dom';
import './App.css';
import Singup from './pages/Singup';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/sign-up" element={ <Singup /> } />
    </Routes>
  );
}

export default App;
