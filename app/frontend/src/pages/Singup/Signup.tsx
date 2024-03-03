import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateSignup from '../../utils/validateSignup';
import './Signup.css';

function Signup() {
  const url = 'http://localhost:3003/sign-up';
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    username,
    email,
    password
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isValid = validateSignup(user);

    if (!isValid) return isValid;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    const { token } = await response.json();

    localStorage.setItem('token', token);

    navigate('/products');
  }

  return (
    <div className='container-signup'>
      <h2>Cadastro</h2>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="username"
          value={ username }
          onChange={ (e) => setUsername(e.target.value) }
          placeholder='Usuário'
        />
        <input
          type="text"
          name="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder='E-mail'
        />
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          placeholder='Senha'
        />
        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export default Signup;
